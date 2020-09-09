const EXPERIENCES = require('../data/experiencesRepository');

const findAllExperiences = () => {
  console.log(EXPERIENCES);
  return { experiences: EXPERIENCES };
};

const findTop5Experiences = () => {
  const experiencesTop = EXPERIENCES.sort((a, b) => {
    if (a.score < b.score) return 1;

    if (a.score > b.score) return -1;

    return 0;
  });
  const top5Experiences = experiencesTop.slice(0, 5);
  return { top5: top5Experiences };
};

const findExperiences = (id) => {
  const experience = EXPERIENCES.find((item) => Number(id) === item.id);
  if (experience === undefined) throw 'Not found';
  return { experience }; // return {experience: experience}
};

module.exports = {
  findAllExperiences,
  findTop5Experiences,
  findExperiences,
};
