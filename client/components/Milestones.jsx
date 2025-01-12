import React from "react";
import {useState, useEffect} from "react";
import AgeComponent from './AgeComponent';

function Milestones (props){
  const ageRange = props.calculatedAgeRange
  const [milestoneArray, setMilestones] = useState([]);

  useEffect(() => {
    fetch(`/milestones?ageRange=${ageRange}`)
    .then(response => response.json())
    .then(data => console.log(data))
  }, [ageRange]);

  return
    <>
      <div>
        {milestoneArray.map((item, index) => {
          return (
          <div key={index}>
          <br/>
          <p> {item}</p>
          <br/>
          </div>
        )
       })
      }
      </div>
    </>

  }

  export default Milestones;