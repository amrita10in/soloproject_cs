const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const userController = {};


userController.createUser = async (req, res, next) => {
  const {username, password, childName, childDOB} = req.body;
  console.log('req.body', req.body);
  console.log('childDOB', typeof childDOB);
  if(typeof username !== 'string' || typeof  password !== 'string' || typeof childName !== 'string' || typeof childDOB !== 'string'){
    return next ({
      log: 'Error in usercontroller.createUser',
      Status: 400,
      message: { err: 'Input is in incorrect format' },
    })
  }
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({username, password : hashedPassword, childName, childDOB});
    console.log(newUser);
    await User.collection.insertOne(newUser);
    console.log('User created successfully:', newUser);
    return next();
  } catch (err){
    return next('Error in userController.createUser: ' + JSON.stringify(err));
  }
}

userController.verifyUser = async (req, res, next) => {
try{
  console.log('req.body', req.body);
  const {username, password} = req.body;
  const myUser = await User.findOne({username});

  if (!myUser) {
    return res.status(401).json({ error: 'Authentication failed' });
  };
  const matchPassword = await bcrypt.compare(password, myUser.password);
  if (!matchPassword) {
    return res.status(401).json({ error: 'Authentication failed, user or password is incorrect'});
  }
  const token = jwt.sign({username}, 'your-secret-key');
  console.log(token);
  res.cookie('username', username, {httpOnly: false, secure: true});
  res.cookie('token', token, { httpOnly: false, secure: true });
  return next();
}
catch(err){
  return next('Error in userController.verifyUser: ' + JSON.stringify(err))
  }
}

userController.userInfo = async (req, res, next) => {
  try{
    console.log('req.query', req.query);
    const {username} = req.query;
    const myUser = await User.findOne({username});
    const {childName, childDOB} = myUser;
    res.locals.userData = {childName, childDOB};
    console.log(res.locals);
    return next();
  }
  catch(err){
    return next('Error in userController.verifyUser: ' + JSON.stringify(err))
    }
  }


module.exports = userController;


//const token = req.cookies.token; Access the 'token' cookie