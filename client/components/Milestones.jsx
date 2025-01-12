import React from "react";
import {useState, useEffect} from "react";
import AgeComponent from './AgeComponent';

// function Milestones (props){
//   console.log('propsInMilestones', props.calculatedAgeRange);
//   const [milestoneArray, setMilestones] = useState([]);

//   useEffect(() => {
//     fetch(`/milestones?ageRange=${props.calculatedAgeRange}`)
//     .then(response => response.json())
//     .then(data => setMilestones(data));
//   }, []);

//   return
//     <>
//       <div>
//         {milestoneArray.map((item, index) => {
//           return (
//           <div key={index}>
//           <br/>
//           <p> {item}</p>
//           <br/>
//           </div>
//         )
//        })
//       }
//       </div>
//     </>

//   }

//   export default Milestones;