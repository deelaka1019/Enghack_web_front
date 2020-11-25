import React, { useState, useEffect } from "react";
import Axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import './Search.css';
import DeleteDialog from '../StudentAlerts/RejectAlert';

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

const StudentSearch = () => {
  const [users, setUsers] = useState([]);
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const getusers = async () => {
    const results = await Axios({
      method: "GET",
      url: "http://localhost:5000/user/loadusers",
    });

    setUsers(results.data);
  };

  
  const handleChangesearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const results = !searchTerm
    ? users
    : users.filter(
        (person) =>
          person.userid.includes(searchTerm) || person.nic.includes(searchTerm)
      );



  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    getusers();

    return () => getusers;
  }, []);

  return (
    <div>
      <h3 className="font-weight-bold text-primary">Search Students</h3>
      <div className="py-4">
        <input
          type="text"
          className="form-control form-control-lg searchbox"
          placeholder="Enter Index no or Student NIC"
          value={searchTerm}
          onChange={handleChangesearch}
        />
      </div>

      {results
      .filter((u) => u.usertype === "student")
      .map((filteredPerson) => (
        <div className={classes.root} key={filteredPerson.userid}>
          <Accordion       
            expanded={expanded === `${filteredPerson.userid}`}
            onChange={handleChange(`${filteredPerson.userid}`)}
            className="my-2"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography className={classes.heading} component={"span"}>
                Index No : {filteredPerson.userid}
              </Typography>

            

              <Typography
                className={`font-weight-bold ${filteredPerson.status}`}
                component={"span"}
              >
              {filteredPerson.status === "pending" ? <div> {filteredPerson.status} Activation </div> 
              :
               <div> {filteredPerson.status} </div>
              }

                
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography component={"span"}>
                <div>Student Name : {filteredPerson.fname} {filteredPerson.lname}</div>
                <div>Student Indexno : {filteredPerson.userid} </div>
               
                <div>NIC : {filteredPerson.nic}</div>
                <div>
                  <span> Address : {filteredPerson.address}</span>
                
                </div>

                <div>
                  <span> Mobile: {filteredPerson.mobile}</span>
                 
                </div>
                <div>Email: {filteredPerson.email}</div>
                

                {filteredPerson.status === "pending" ? <div></div> : <div className="pt-2"><DeleteDialog stuid={filteredPerson._id} callback={getusers}/></div>} 
                
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      ))}
    </div>
  );
};

export default StudentSearch;
