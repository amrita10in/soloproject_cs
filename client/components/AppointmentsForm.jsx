import React from "react";
import {useState, useEffect} from "react";
import styles from '../stylesheets/styles.module.css';

function AppointmentsForm ({username, apptData, setApptDisplay}) {

  const [formData, setFormData] = useState({username: username, date: '', type: '', location: '', provider: ''});
  const [showForm, setForm] = useState(true);

  function handleChange(e){
    setFormData({...formData, [e.target.name] : e.target.value});
  }

  async function handleOnClick (e) {
    e.preventDefault();
    console.log('formData', formData);

    try {
      const response = await fetch('/main/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setFormData({username: username, date: '', type: '', location: '', provider: ''});
      setApptDisplay(false);
      console.log(apptData);
      apptData();
    }
    catch (err){
      console.log("Error in submitting form data");
    }
  }

  const handleDoneClick = () => {
    setForm(false);
  }

  return (
  <>
    {showForm && (
    <div className={styles.appointmentForm}>
      <p><label id='date'> Date </label></p>
      <p><input type= 'text' name='date' value={formData.date} onChange= {handleChange} placeholder= 'mm/dd/yyyy' id="dateField"></input></p>

      <p><label id='type'>Appointment Type</label></p>
      <p><input type= "text" name='type' value={formData.type} onChange={handleChange} id="typeField"></input></p>

      <p><label id='location'>Location</label></p>
      <p><input type= "text" name='location' value={formData.location} onChange={handleChange} id="locationField"></input></p>

      <p><label id='provider'>Provider</label></p>
      <p><input type= "text" name='provider' value={formData.provider} onChange={handleChange} id="providerField"></input></p>

      <div className={styles.apptSubmitButton}><button
      type="submit" id="submitForm" onClick={handleOnClick}>Submit</button>&nbsp;&nbsp;&nbsp;&nbsp;
      <button type="button" onClick={handleDoneClick}>Done</button></div>
  </div>
 )}
</>
 );
}

export default AppointmentsForm;