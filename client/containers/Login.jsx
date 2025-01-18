import React from 'react';
import styles from '../stylesheets/styles.module.css';

const Login = () => {
  return (
  <div className={styles.centerContainer}>
    <div className= {styles.loginCSS}>
     <form method='POST' action='/'>
      <p className={styles.login}>Login</p>
      <p><input type="text" className={styles.inputField} name="username" placeholder="username" id="loginUsernameField"></input></p>
      <p><input type= "password" className={styles.inputField} name="password" placeholder="password" id="loginPasswordField"></input></p>
      <p><button type="submit" className={styles.loginButton} id="verifyUser">Sign In</button></p>
      <p className={styles.newUsers}> New users &nbsp;&nbsp;<a href={'/signup'}>Signup</a></p>
    </form>
  </div>
</div>
  )
}

export default Login;