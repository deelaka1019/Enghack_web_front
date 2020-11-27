import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import '../Student/Search.css';
import AudioPlayer from 'material-ui-audio-player';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';


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

const muiTheme = createMuiTheme({});

const ViewPods = () => {
//   const [readings, setReadings] = useState([]);
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  // const [searchTerm, setSearchTerm] = useState("");
  // const [oldtext,setoldtext] = useState("Hello world");
  // const [newtext,setnewtext] = useState("");
  // const [per,setper]=useState();

//   const getreadings = async () => {
//     const results = await Axios({
//       method: "GET",
//       url: "http://localhost:5000/reading/loadreadings",
//     });

//     setReadings(results.data);
//   };

  
//   const handleChangesearch = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const results = !searchTerm
//     ? readings
//     : readings.filter(
//         (read) =>
//           read.ndate.includes(searchTerm) || read.title.includes(searchTerm)
//       );

// const check = (s1,s2) =>{
//   console.log("clicked")
//   let longer = s1;
//   let shorter = s2;
//   if (s1.length < s2.length) {
//     longer = s2;
//     shorter = s1;
//   }
//   let longerLength = longer.length;
//   if (longerLength === 0) {
//     return 1.0;
//   }
//   setper((longerLength - editDistance(longer, shorter)) / parseFloat(longerLength));
//   return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);

  
// }

// function editDistance(s1, s2) {
//   s1 = s1.toLowerCase();
//   s2 = s2.toLowerCase();

//   var costs = new Array();
  
//   for (var i = 0; i <= s1.length; i++) {
//     var lastValue = i;
//     for (var j = 0; j <= s2.length; j++) {
//       if (i == 0)
//         costs[j] = j;
//       else {
//         if (j > 0) {
//           var newValue = costs[j - 1];
//           if (s1.charAt(i - 1) != s2.charAt(j - 1))
//             newValue = Math.min(Math.min(newValue, lastValue),
//               costs[j]) + 1;
//           costs[j - 1] = lastValue;
//           lastValue = newValue;
//         }
//       }
//     }
//     if (i > 0)
//       costs[s2.length] = lastValue;
//   }
//   return costs[s2.length];
//   console.log(costs[s2.length])
// }




  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

//   useEffect(() => {
//     getreadings();

//     return () => getreadings;
//   }, []);

  return (
    <div>
      <h3 className="font-weight-bold text-primary">Search Podcasts</h3>
      <div className="py-4">
        <input
          type="text"
          className="form-control form-control-lg searchbox"
          placeholder="Enter title or date"
        //   value={searchTerm}
        //   onChange={handleChangesearch}
        />
      </div>

      {/* {results.map((filteredread) => ( */}
        <div className={classes.root}>
          {/* <Accordion       
            expanded={expanded === `${filteredread._id}`}
            onChange={handleChange(`${filteredread._id}`)}
            
          > */}

<Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className="my-2">



            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography className={classes.heading} component={"span"}>
                Date : 2020.10.15
              </Typography>

              <Typography className={classes.heading} component={"span"}>
                Title : Learn English
              </Typography>

            

             
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              <div className="p-3">          
      <ThemeProvider theme={muiTheme}>
 
  <AudioPlayer
    elevation={1}
    width="800px"
    variation="primary"
    download={true}
    debug={false}
    src="https://6a63fca904fd268f15f7-d5770ffdd579eb31eaa89faeffc55fe7.ssl.cf1.rackcdn.com/elementary-podcasts-s01-e03.mp3"
  />
</ThemeProvider>
</div>

<div className="p-3">Hello, and welcome to English in 10 Minutes. My name is Nick Leonard and I
teach English as a foreign language at a private language school. I’m also an
English language examiner at the International Committee of the Red Cross. 1
Today I’m so excited to introduce you to English in 10 Minutes, a podcast for
intermediate and advanced English learners that will help you improve your
English significantly. This ‘zero’ episode of the podcast is an introductory
episode to let you know what the podcast is all about, and what you can
expect in future episodes. 
</div>

              </Typography>
        
            </AccordionDetails>
            <div className="p-3">
                  <button className="btn btn-danger mr-2">Delete</button>
                  <button className="btn btn-primary ">Edit</button>
              </div>
          </Accordion>
        </div>
      {/* ))} */}


      {/* <input className="" type="text" onChange={(e) => setnewtext(e.target.value)}/>
     
      <div>{oldtext}</div>
      <div>{newtext}</div>
      <button onClick={() =>check(oldtext,newtext)}>test</button>
      <div>{per*100}</div> */}
    </div>
  );
};

export default ViewPods;
