const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Endpoint to handle POST requests containing the required keys
app.post('/submit', (req, res) => {
  const { email, feeling, timestamp, img1, img2, img3, img4 } = req.body;

  // Here you can process the received data as needed
  // For example, you can log it to the console
  console.log('Received request:');
  console.log('Email:', email);
  console.log('Feeling:', feeling);
  console.log('Timestamp:', timestamp);
  console.log('Image 1:', img1);
  console.log('Image 2:', img2);
  console.log('Image 3:', img3);
  console.log('Image 4:', img4);

  // You can send back a response if needed
  res.send('Request received successfully!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
