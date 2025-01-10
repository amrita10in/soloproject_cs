const Appointments = require('../models/appointmentsModel');

const appointmentsController = {};


appointmentsController.getInfo = () => {

};

appointmentsController.createAppointment = async (req, res, next) => {
  console.log('req.body', req.body);
  const {date, type, location, provider} = req.body;
  console.log(date, type, location, provider);
  if( typeof date !== 'string' || typeof type !== 'string' || typeof location !== 'string' || typeof provider !== 'string'){
    return next({
      log: 'Error in appointments.thiscreateAppointment',
      Status: 400,
      message: { err: 'Input is in incorrect format' },
    })
  }
  try {
    const newAppointment = new Appointments({date, type, location, provider});
    console.log("newAppointment", newAppointment);
    await Appointments.collection.insertOne(newAppointment);
    return next();
  } catch (err){
    return next('Error in appointments.whichcreateAppointment: ' + JSON.stringify(err));
  }
}

module.exports = appointmentsController;