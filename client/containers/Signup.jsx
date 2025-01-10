import React from 'react';

const Signup = () => {

  return (
    <div>
      <form method='POST' action='/signup'>
    <p id= "signupTitle"> Please sign up below: </p>
    <p><label id="createUser"> Please create your username</label></p>
    <input type="text" name="username" id ="usernameInput"></input>

    <p><label id="createPassword"> Please create your password </label></p>
    <input type="text" name="password" id="passwordInput"></input>

    <p><label id="createChildName"> Please enter your child's name</label></p>
    <input type="text" name="childName" id="childName"></input>

    <p><label id="createDateOfBirth"> Please enter your child's date of birth</label></p>
    <input type="text" name="childDOB" placeholder="mm/dd/yyyy" id="addBirth"></input>

    <p><button type="submit" id="addUser">Submit</button></p>
    </form>
    </div>
  )
}

export default Signup;