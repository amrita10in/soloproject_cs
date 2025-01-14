import React from "react";
import {useState, useEffect} from "react";

function Dropdown ({calculatedAgeRange}){
  console.log('calculatedAgeRangeInDropDown', calculatedAgeRange);
  const [currentState, setState] = useState(calculatedAgeRange);

  const handleChange = (e) => {
    setState(e.target.value);
  };

  return (
    <div>
      <select value={calculatedAgeRange} onChange={handleChange}>
        <option value={currentState}></option>
        <option value="6">0-6 months</option>
        <option value="9">6-9 months</option>
        <option value="12">9-12 months</option>
        <option value="15">12-15 months</option>
        <option value="18">15-18 months</option>
        <option value="24">18-24 months</option>
      </select>
    </div>
  )
}

export default Dropdown;