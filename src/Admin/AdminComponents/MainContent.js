
import Axios from "axios";
import React, { useState,useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ActiveDialog from '../StudentAlerts/ActiveAccountAlert';
import DeleteDialog from '../StudentAlerts/RejectAlert';
import '../admincomp.css';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

const MainContent = () => {

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

 
  const [users,setUsers] = useState([])
 

  const getusers = async () => {
    const results = await Axios({
      method: "GET",
      url: "http://localhost:5000/user/loadusers",
    });

    setUsers(results.data);
  };


  useEffect(() => {
    getusers();
    return () => getusers;
  }, []);



  return (
    <React.Fragment>
        <h3 className="text-primary font-weight-bold pb-2">Pending Account Activations</h3>
<div className="row">
  <div className="col-lg-12">
  <div className={classes.root}>
        {users
          .filter(
            (u) => u.usertype === "student" && u.status === "pending"
          )
          .map((filteredPerson) => (
            <Accordion
              key={filteredPerson.clino}
              expanded={expanded === `${filteredPerson.userid}`}
              onChange={handleChange(`${filteredPerson.userid}`)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography className={classes.heading} component={"span"}>
                  Index no : {filteredPerson.userid}
                </Typography>

                <Typography className="text-warning font-weight-bold" component={"span"}>
                  Pending Activation
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography component={"span"}>
                  
                  <div>Student indexno : {filteredPerson.userid}</div>
                  <div>Student Name : {filteredPerson.fname} {filteredPerson.lname}</div>
                  <div>NIC : {filteredPerson.nic}</div>
                  <div>
                    <span> Address : {filteredPerson.address}</span>
                  </div>

                  <div>
                    <span> Mobile: {filteredPerson.mobile}</span>
                  
                  </div>
                  <div>Email: {filteredPerson.email}</div>
                  <div>{filteredPerson.date}</div>

                  <div className="acc_status my-2">
                     <div className="mr-2"><ActiveDialog stuid={filteredPerson._id} callback={getusers}/>  </div> 
                     <div><DeleteDialog stuid={filteredPerson._id} callback={getusers}/></div>
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
      </div>
  </div>
 
</div>



     
    </React.Fragment>
  );
};

export default MainContent;
