import React from "react";
import {useState, useEffect} from "react";
import AgeComponent from './AgeComponent';

function Toys({ calculatedAgeRange }) {
  const [toysArray, setToys] = useState([]);

  useEffect(() => {
    fetch(`/toys?ageRange=${calculatedAgeRange}`)
      .then((response) => {return response.json()})
      .then((data) => {
        console.log('data.toys', data.toys);
        if (data && data.toys) setToys(data.toys); //update state when data is fetched
      })
      .then((data) => console.log(data))
      .catch((err) => console.error("Error fetching toys data:", err))
  }, [calculatedAgeRange]);


  return (
    <div>
      <p>Toys for this age group:</p>
      {toysArray.map((item, index) => (
          <div key={index}>
            <p> {item}</p>
          </div>
        )
      )}
    </div>
  );
}

export default Toys;

