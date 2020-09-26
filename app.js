const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const PORT = 3001;

// mongo
require('./connection/connectionDb');

// Routes
const experiencesRoutes = require('./routes/experiences');
const bookingRoutes = require('./routes/booking');
app.use('/experiencies', experiencesRoutes);
/**
 *  Sample endpoints:
 *    - localhost:PORT/experiencies/all
 *    - localhost:PORT/experiencies/top5
 *    - localhost:PORT/experiencies/detail
 */

app.use('/booking', bookingRoutes);

app.listen(PORT, () => {
  console.log(`Server running in PORT: ${PORT}`);
});
