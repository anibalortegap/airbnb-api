const moogose = require('mongoose');

const { Schema } = moogose;

const BookingSchema = new Schema({
  name: String,
  email: String,
  phone: String,
  booking_date: Date,
  experience_id: String,
});

const BookingModel = moogose.model('booking', BookingSchema);

module.exports = BookingModel;
