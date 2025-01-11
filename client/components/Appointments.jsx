import React from "react";
import {useState, useEffect} from "react";
import AgeComponent from './AgeComponent';
import AppointmentsForm from './AppointmentsForm';

function Appointments () {
  const [items, setApptData] = useState([]);
  const [showForm, setForm] = useState(false);

  async function handleClick (){
    try{
    const response = await fetch('/main/getAppointments');
    const data = await response.json();
    console.log(data);
    } catch (err){
      console.log('Error in fetching data:'+ err);
    }
  }

  function handleAddAppointments (){
    setForm(true);
  }

  return (
  <>
    <div>
    <p><button type='submit' onClick={handleClick}>My Appointments</button></p>
    </div>
    {/* <div>
      {items.map(item => {
        console.log(item);
        return <p>{item}</p>
      })}
    </div> */}
    <p><button type='submit' onClick={handleAddAppointments}>Add Appointments</button></p>
    {showForm && <AppointmentsForm />}
  </>
  )
}

export default Appointments;