const Toys = require('../models/toysModel');

const toysController = {};

toysController.getToys = async (req, res, next) => {
  console.log('req.query I am in toys', req.query);
  let {ageRange} = req.query;
  ageRange = Number(ageRange);
  try{
    const toysData = await Toys.findOne({age: ageRange});
    console.log('toysData', toysData.toys);
    res.locals.toysData = toysData.toys;
    next();
    } catch (err){
      return next('Error in retrieving toys data: ' + JSON.stringify(err));
    }

}






module.exports = toysController;