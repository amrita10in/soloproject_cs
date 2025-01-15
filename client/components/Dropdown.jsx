import React from "react";
import {useState, useEffect} from "react";
import Milestones from '../components/Milestones';
import Toys from '../components/Toys';
import styles from '../stylesheets/styles.module.css';

function Dropdown ({calculatedAgeRange}){
  console.log('calculatedAgeRangeInDropDown', calculatedAgeRange);
  const [currentState, setState] = useState(calculatedAgeRange);
  console.log('currentState', currentState);

  useEffect (() => setState(calculatedAgeRange), [calculatedAgeRange])



  const handleChange = (e) => {
    console.log('e.target.value', e.target.value);
    setState(e.target.value);
  };

  return (
  <div>
    <div >
      <select className={styles.dropDownText} value={currentState} onChange={handleChange}>
        <option value= "">Select and age range</option>
        <option value="3">0-3 months</option>
        <option value="6">3-6 months</option>
        <option value="9">6-9 months</option>
        <option value="12">9-12 months</option>
        <option value="15">12-15 months</option>
        <option value="18">15-18 months</option>
        <option value="24">18-24 months</option>
      </select>
    </div>
        <br></br>
      <div className={styles.containersRow}>
        <Milestones calculatedAgeRange={currentState} className={styles.dataContainerText}/>
        <Toys calculatedAgeRange={currentState}/>
        </div>
    </div>
  )
}

export default Dropdown;