import React from "react";
import {useState, useEffect} from "react";
import { useSelector } from "react-redux";
import Milestones from '../components/Milestones';
import Toys from '../components/Toys';
import Dropdown from '../components/Dropdown';

function AgeComponent () {
  const [childName, setChildName] = useState("");
  const [ageInMonths, setChildAge] = useState("");

  function getCookies (cname) {
    const name = cname + '=';
    const decodedCookie = decodeURIComponent(document.cookie);
    const array = decodedCookie.split(';');
    let username;
    for (let i = 0; i < array.length; i++){
      let cookie = array[i];
      console.log('cookie', cookie);
      while (cookie.charAt(0) == ''){
        cookie = cookie.substring(1);
        console.log("whilecookie", cookie);
      }
      if(cookie.indexOf(name) > -1){
        username = cookie.substring(name.length, cookie.length);
        console.log('username', username);
        break;
      }
    }
    return username;
  }

  const username = getCookies('username');

  const calculateAge = (dateString) => {
    console.log('dateString', dateString);
    const [month, day, year] = dateString.split('/').map(Number);
    const birthDate = new Date(year, month - 1, day);
    const today = new Date();
    const yearsDiff = today.getFullYear() - birthDate.getFullYear();
    const monthsDiff = today.getMonth() - birthDate.getMonth();
    let ageInMonths = yearsDiff * 12 + monthsDiff;
    if (today.getDate() < birthDate.getDate()) {
      ageInMonths--;
    }
    return ageInMonths;
  }


  useEffect(() => {
    console.log('usernameinUseEffect', username);
    fetch(`/userInfo?username=${encodeURIComponent(username)}`)
    .then(response => response.json())
    .then(data => {
      setChildName(data.childName);
      const ageInMonths = calculateAge(data.childDOB);
      setChildAge(ageInMonths);
    })
  }, [username])

  console.log('ageInMonths', ageInMonths);

  function calculateRange (ageInMonths){
    console.log('ageInMonthsInFunction', ageInMonths);
    let array = [0, 3, 6, 9, 12, 15, 18, 24];
    let ageRange = 0;
    for (let i = 0; i < array.length; i++){
      if(ageInMonths > array[i] && ageInMonths < array[i+1]){
        ageRange = array[i+1];
        return ageRange;
      }
    }
    return ageRange;
  }

  const ageRange = calculateRange(ageInMonths);
  console.log('ageRange', ageRange);


  return (
  <>
    <div className="ageCard">
      <p id= "name"> Welcome back {username}!</p>
      <p id= "child">{childName} is {ageInMonths} months old as of today</p>
      <p id= "data">Here is some information about this age: </p>
      <Dropdown calculatedAgeRange={ageRange}/>
    </div>
    <Milestones calculatedAgeRange={ageRange}/>
    <Toys calculatedAgeRange={ageRange}/>
  </>
  );
};

export default AgeComponent;
