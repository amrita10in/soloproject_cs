import React from 'react';

const Login = () => {
  return (
  <div>
    <form method='POST' action='/'>
      <h1><strong>Login:</strong></h1>

      <p><label id="loginUsername"> Please enter username: </label></p>
      <p><input type= "text" name="username" id="loginUsernameField"></input></p>

      <p><label id='loginPassword'> Please enter password: </label></p>
      <p><input type= "text" name="password" id="loginPasswordField"></input></p>

      <p><button type="submit" id="verifyUser">Submit</button></p>
    </form>
  </div>
  )
}

export default Login;