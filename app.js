const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = 3001;

// Routes
const experiencesRoutes = require('./routes/experiences');
app.use('/experiencies', experiencesRoutes);
/**
 *  Sample endpoints:
 *    - localhost:PORT/experiencies/all
 *    - localhost:PORT/experiencies/top5
 *    - localhost:PORT/experiencies/detail
 */

app.listen(PORT, () => {
  console.log(`Server running in PORT: ${PORT}`);
});
