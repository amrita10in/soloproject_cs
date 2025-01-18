import React from "react";
import {useState, useEffect} from "react";
import AgeComponent from './AgeComponent';
import AppointmentsForm from './AppointmentsForm';
import styles from '../stylesheets/styles.module.css';

function Appointments ({username}) {
  const [items, setApptData] = useState([]);
  const [showForm, setForm] = useState(false);
  const [apptDisplay, setApptDisplay] = useState(false);


  async function handleMyApptClick (){
    if(!apptDisplay) {
    try {
    const response = await fetch(`/main/getAppointments?username=${encodeURIComponent(username)}`);
    const data = await response.json();
    console.log(data);
    setApptData(data);
    setApptDisplay(true)

    } catch (err){
      console.log('Error in fetching data:'+ err);
    }
  } else {
    setApptData([]);
    setApptDisplay(false);
  }
}


  function handleAddAppointments (){
    showForm ? setForm(false) : setForm(true);
  }

  async function handleDelete(date){
    console.log('date', date);
  try{
    const response  = await fetch(`/main/appointments/date?date=${encodeURIComponent(date)}`, {
      method: 'DELETE',
      });
    } catch(err){
      console.log('Error in deleting data:' + err);
    }
    handleMyApptClick();
}



  return (
  <>
    <div>
    <p ><button className={styles.myAppointmentsButton} type='submit' onClick={handleMyApptClick}>My Appointments</button></p>
    </div>
    <div className= {styles.containersRow}>
      {items.map((item, index) => {
        return (
        <div className={styles.appointmentsText} key={index}>
        <br/>
        <p> Appointment: {++index}</p>
        <p>   Date: {item.date}</p>
        <p>   Type: {item.type}</p>
        <p>   Location: {item.location}</p>
        <p>   Provider: {item.provider}</p>
        <button type="submit" onClick={()=> handleDelete(item.date)}> Delete </button>
        <br/>
        </div>
      )
     })
    }
    </div>
    <p><button className={styles.myAppointmentsButton} type='submit' onClick={handleAddAppointments}>Add Appointments</button></p>
    {showForm && <AppointmentsForm username={username} apptData={handleMyApptClick} setApptDisplay={setApptDisplay}/>}
  </>
  )
}

export default Appointments;