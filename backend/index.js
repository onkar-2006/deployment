const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors()); 
app.use(express.json());

app.get('/health', (req, res) => res.status(200).send('System Online'));

app.get('/api/data', (req, res) => {
  res.json({ message: "Data fetched from Backend successfully!" });
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});