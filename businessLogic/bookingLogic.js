const BookingModel = require('../models/bookingModel');

const saveBooking = async (data) => {
  try {
    console.log('Soy data', data);
    await BookingModel(data).save();
    return { status: 200, msg: 'Ok' };
  } catch (error) {
    throw error;
  }
};

module.exports = { saveBooking };
