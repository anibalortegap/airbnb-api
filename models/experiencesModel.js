const moongose = require('mongoose');

const { Schema } = moongose;

const ExperiencesSchema = new Schema({
  image: String,
  title: String,
  description: String,
  place: String,
  score: Number,
  users: Number,
});

const ExperienceModel = moongose.model('experiences', ExperiencesSchema);

module.exports = ExperienceModel;
