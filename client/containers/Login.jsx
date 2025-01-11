import React from 'react';
import styles from '../stylesheets/styles.module.css';

const Login = () => {
  return (
  <div className={styles.centerContainer}>
    <div className= {styles.loginCSS}>
     <form method='POST' action='/'>
      <h1>Login</h1>

      <p><label id="loginUsername" className={styles.inputField} > Please enter username: </label></p>
      <p><input type="text"  name="username" id="loginUsernameField"></input></p>

      <p><label id='loginPassword' className={styles.inputField}> Please enter password: </label></p>
      <p><input type= "text"  name="password" id="loginPasswordField"></input></p>

      <p><button type="submit" className={styles.loginButton} id="verifyUser">Submit</button></p>
    </form>
  </div>
</div>
  )
}

export default Login;