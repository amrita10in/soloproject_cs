const Toys = require('../models/toysModel');

const toysController = {};

toysController.getToys = async (req, res, next) => {
  let {ageRange} = req.query;
  ageRange = Number(ageRange);
  try{
    const toysData = await Toys.findOne({age: ageRange});
    res.locals.toysData = toysData.toys;
    next();
    } catch (err){
      return next('Error in retrieving toys data: ' + JSON.stringify(err));
    }
}






module.exports = toysController;