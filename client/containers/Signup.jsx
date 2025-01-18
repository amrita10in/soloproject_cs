import React from 'react';
import styles from '../stylesheets/styles.module.css';

const Signup = () => {

  return (
  <div className={styles.centerContainer}>
    <div className={styles.signupCSS}>
      <form method='POST' action='/signup'>
    <p id="signupTitle" className={styles.login}> Sign up </p>
    <p><label id="createUser" className={styles.signupText}> Please enter your username</label></p>
    <input type="text" name="username" id ="usernameInput"></input>

    <p><label id="createPassword" className={styles.signupText}> Please enter your password </label></p>
    <input type="text" name="password" id="passwordInput"></input>

    <p><label id="createChildName" className={styles.signupText}> Please enter your child's name</label></p>
    <input type="text" name="childName" id="childName"></input>

    <p><label id="createDateOfBirth" className={styles.signupText}> Please enter your child's date of birth</label></p>
    <input type="text" name="childDOB" placeholder="mm/dd/yyyy" id="addBirth"></input>

    <br/><br/>
    <p><button className={styles.signupButton} type="submit" id="addUser">Submit</button></p>
    </form>
    </div>
  </div>
  )
}

export default Signup;