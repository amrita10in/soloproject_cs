const Appointments = require('../models/appointmentsModel');

const appointmentsController = {};


appointmentsController.getAppointments = async (req, res, next) => {
  try{
  const data = await Appointments.find();
  res.locals.allAppointments = data;
  next();
  } catch (err){
    return next('Error in retrieving appointments data: ' + JSON.stringify(err));
  }
};

appointmentsController.createAppointment = async (req, res, next) => {
  const {date, type, location, provider} = req.body;
  if( typeof date !== 'string' || typeof type !== 'string' || typeof location !== 'string' || typeof provider !== 'string'){
    return next({
      log: 'Error in appointments.thiscreateAppointment',
      Status: 400,
      message: { err: 'Input is in incorrect format' },
    })
  }
  try {
    const newAppointment = new Appointments({date, type, location, provider});
    await Appointments.collection.insertOne(newAppointment);
    return next();
  } catch (err){
    return next('Error in appointments.whichcreateAppointment: ' + JSON.stringify(err));
  }
}

module.exports = appointmentsController;