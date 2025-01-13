import React from "react";
import {useState, useEffect} from "react";
import AgeComponent from './AgeComponent';


function Milestones({ calculatedAgeRange }) {
  const [milestoneArray, setMilestones] = useState([]);

  useEffect(() => {
    fetch(`/milestones?ageRange=${calculatedAgeRange}`)
      .then((response) => {return response.json()})
      .then((data) => {
        if (data && data.milestones) setMilestones(data.milestones); //update state when data is fetched
      })
      .catch((err) => console.error("Error fetching milestones:", err))
  }, [calculatedAgeRange]);


  return (
    <div>
      <p>Milestones for this age group:</p>
      {milestoneArray.map((item, index) => (
          <div key={index}>
            <input type="checkbox"/>
            <label> {item}</label>
          </div>
        )
      )}
    </div>
  );
}

export default Milestones;

// function Milestones ({calculatedAgeRange}){
//   const [milestoneArray, setMilestones] = useState(null);

//   console.log('I am here');

//   useEffect(() => {
//     if (!calculatedAgeRange) {
//       console.warn('ageRange is not defined, skipping fetch');
//       return;
//     }
//     fetch(`/milestones?ageRange=${calculatedAgeRange}`)
//     .then(response => response.json())
//     .then(data => setMilestones(data.milestones));
//   }, [calculatedAgeRange]);
// }




// return (
//     <>
//       <div>
//         <p>Milestones for this age group: </p>
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
//    )
// }

//   export default Milestones;