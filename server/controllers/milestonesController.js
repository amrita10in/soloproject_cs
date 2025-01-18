const Milestones = require('../models/milestonesModel');

const milestonesController = {};

milestonesController.getMilestones = async (req, res, next) => {
  let {ageRange} = req.query;
  ageRange = Number(ageRange);
  try{
    const milestoneData = await Milestones.findOne({age: ageRange});
    res.locals.milestonesData = milestoneData;
    next();
    } catch (err){
      return next('Error in retrieving milestone data: ' + JSON.stringify(err));
    }

}

module.exports = milestonesController;