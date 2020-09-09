const express = require('express');

const app = express();
app.use(express.json());
const PORT = 3001;

app.get('/', (req, res) => {
  let data = {
    name: 'Anibal',
    country: 'CO',
  };
  res.send(data).status(200);
});

app.get('/greet', (req, res) => {
  const { name, age } = req.query;
  res.send(`Greeting ${name} with ${age}`);
});

app.put('/', (req, res) => {
  res.send('Put request');
});

app.delete('/', (req, res) => {
  res.send('Delete request');
});

app.post('/', (req, res) => {
  const { name, age, persona } = req.body;
  const { country, city } = persona;

  res.send(`Post request ${name} City: ${city}`);
});

app.listen(PORT, () => {
  console.log(`Server running ${PORT}`);
});
