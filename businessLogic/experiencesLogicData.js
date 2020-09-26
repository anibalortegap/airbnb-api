const ExperiencesModel = require('../models/experiencesModel');

const findAllExperiences = async () => {
  try {
    const experiences = await ExperiencesModel.find();
    return { experiences };
  } catch (error) {
    throw error;
  }
};

const findTop5Experiences = async () => {
  try {
    const experiencesTop = await ExperiencesModel.find()
      .sort({ score: 'desc' })
      .limit(5);
    return { top5: experiencesTop };
  } catch (error) {
    throw error;
  }
};

const findExperiences = async (id) => {
  try {
    const experience = await ExperiencesModel.findById(id);
    if (!experience) throw { status: 400, msg: 'Experience not found' };
    return { experience }; // return {experience: experience}
  } catch (error) {
    throw { status: 500, msg: error };
  }
};

module.exports = {
  findAllExperiences,
  findTop5Experiences,
  findExperiences,
};
