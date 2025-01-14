import React from "react";
import {useState, useEffect} from "react";
import AgeComponent from './AgeComponent';

function Toys({ calculatedAgeRange }) {
  const [toysArray, setToys] = useState([]);

  console.log('calculatedAgeRange', calculatedAgeRange);

  useEffect(() => {
    fetch(`/toys?ageRange=${calculatedAgeRange}`)
      .then((response) => {return response.json()})
      .then((data) => {
        console.log('data', data, 'data.toys', data.toys);
        if (data.length > 0) setToys(data); //update state when data is fetched
      })
      .then((data) => console.log(data))
      .catch((err) => console.error("Error fetching toys data:", err))
  }, [calculatedAgeRange]);


  return (
    <div>
      <p>Top toys for this age group:</p>
      {toysArray.map((item, index) => {
        return (
          <div key={index}>
            <p>{item.name}          {item.price}</p>
            <a href={item.link}> Amazon link</a>
          </div>
        )
      }
    )}
    </div>
  );
}

export default Toys;

