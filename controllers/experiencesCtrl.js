const {
  findAllExperiences,
  findTop5Experiences,
  findExperiences,
} = require('./../businessLogic/experiencesLogicData');

const all = async (req, res) => {
  try {
    const response = await findAllExperiences();
    res.json(response);
  } catch (error) {
    res.status(500).send(error);
  }
};

const top5 = async (req, res) => {
  try {
    const response = await findTop5Experiences();
    res.json(response);
  } catch (error) {
    res.status(500).send(error);
  }
};

const detail = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await findExperiences(id);
    res.json(response);
  } catch (error) {
    console.log(error);
    res.status(error.status).send(error.msg);
  }
};

module.exports = {
  all,
  top5,
  detail,
};
