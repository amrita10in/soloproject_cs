import React from "react";
import {useState, useEffect} from "react";
import AgeComponent from './AgeComponent';
import styles from '../stylesheets/styles.module.css';

function Milestones({ calculatedAgeRange }) {
  const [milestoneArray, setMilestones] = useState([]);
  const [toysArray, setToys] = useState([]);

  useEffect(() => {
    fetch(`/milestones?ageRange=${calculatedAgeRange}`)
      .then((response) => {return response.json()})
      .then((data) => {
        if (data && data.milestones) setMilestones(data.milestones); //update state when data is fetched
      })
      .catch((err) => console.error("Error fetching milestones data:", err))
  }, [calculatedAgeRange]);



  return (
    <div className={styles.dataContainerMilestoneText}>
      <p className={styles.dataContainerHeader}>Top Milestones</p>
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

