const experiencesModel = require('./../models/experiencesModel');
const experiencesRepository = require('./../data/experiencesRepository');

const connection = () => {
  require('./../connection/connectionDb');
};
const populateData = () => {
  experiencesRepository.map(async (el) => {
    try {
      await experiencesModel(el).save();
    } catch (error) {
      console.error('Error:', err);
    }
  });
};
connection();
populateData();
