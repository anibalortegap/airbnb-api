const { saveBooking } = require('../businessLogic/bookingLogic');

const booking = async (req, res) => {
  try {
    const { body } = req;
    const response = await saveBooking(body);
    console.log(response);
    res.status(200).send(response);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  booking,
};
