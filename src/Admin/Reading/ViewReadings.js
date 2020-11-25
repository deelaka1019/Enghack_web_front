import React, { useState, useEffect } from "react";
import Axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import '../Student/Search.css';


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

const ViewReading = () => {
  const [readings, setReadings] = useState([]);
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const getreadings = async () => {
    const results = await Axios({
      method: "GET",
      url: "http://localhost:5000/reading/loadreadings",
    });

    setReadings(results.data);
  };

  
  const handleChangesearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const results = !searchTerm
    ? readings
    : readings.filter(
        (read) =>
          read.ndate.includes(searchTerm) || read.title.includes(searchTerm)
      );



  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    getreadings();

    return () => getreadings;
  }, []);

  return (
    <div>
      <h3 className="font-weight-bold text-primary">Search Articles</h3>
      <div className="py-4">
        <input
          type="text"
          className="form-control form-control-lg searchbox"
          placeholder="Enter title or date"
          value={searchTerm}
          onChange={handleChangesearch}
        />
      </div>

      {results.map((filteredread) => (
        <div className={classes.root} key={filteredread._id}>
          <Accordion       
            expanded={expanded === `${filteredread._id}`}
            onChange={handleChange(`${filteredread._id}`)}
            className="my-2"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography className={classes.heading} component={"span"}>
                Date : {filteredread.ndate}
              </Typography>

              <Typography className={classes.heading} component={"span"}>
                Title : {filteredread.title}
              </Typography>

            

             
            </AccordionSummary>
            <AccordionDetails>
              <Typography component={"span"}>
      <div>{filteredread.description}</div>
              </Typography>

             
            </AccordionDetails>
            <div className="p-3">
                  <button className="btn btn-primary">Edit</button>
                  <button className="btn btn-danger ml-2">Delete</button>
              </div>
          </Accordion>
        </div>
      ))}
    </div>
  );
};

export default ViewReading;
