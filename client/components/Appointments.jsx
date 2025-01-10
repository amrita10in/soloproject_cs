import React from "react";
import {useState, useEffect} from "react";
import AgeComponent from './AgeComponent';
import AppointmentsForm from './AppointmentsForm';

function Appointments () {
  const [items, setApptData] = useState("");
  const [showForm, setForm] = useState(false);

  function handleClick (){
    useEffect(()=> {
        fetch('/appointments')
        .then(data => data.json());
    }, [appts])
  }

  function handleClick2 (){
    setForm(true);
  }

  return (
  <>
    <div>
    <p><button type='submit'>My Appointments</button></p>
    </div>
    {/* <div>
      {items.map(item => {
        console.log(item);
        return <p>{item}</p>
      })}
    </div> */}
    <p><button type='submit' onClick={handleClick2}>Add Appointments</button></p>
    {showForm && <AppointmentsForm />}
  </>
  )
}

export default Appointments;