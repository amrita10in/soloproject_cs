const Appointments = require('../models/appointmentsModel');

const appointmentsController = {};


appointmentsController.getAppointments = async (req, res, next) => {
  try{
  const {username} = req.query;
  const data = await Appointments.find({username});
  res.locals.allAppointments = data;
  next();
  } catch (err){
    return next('Error in retrieving appointments data: ' + JSON.stringify(err));
  }
};

appointmentsController.createAppointment = async (req, res, next) => {
  const {username, date, type, location, provider} = req.body;
  if( typeof date !== 'string' || typeof type !== 'string' || typeof location !== 'string' || typeof provider !== 'string'){
    return next({
      log: 'Error in appointments.thiscreateAppointment',
      Status: 400,
      message: { err: 'Input is in incorrect format' },
    })
  }
  try {
    const newAppointment = new Appointments({username, date, type, location, provider});
    await newAppointment.save();
    return next();
  } catch (err){
    return next('Error in appointments.whichcreateAppointment: ' + JSON.stringify(err));
  }
}


appointmentsController.deleteAppointment = async (req, res, next) => {
  const {date} = req.query;
  try {
    await Appointments.deleteOne({date});
    return next();
  } catch (err){
    return next('Error in deleteAppointment controller: ' + JSON.stringify(err));
  }
}

module.exports = appointmentsController;