const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000; // Use the PORT provided by Render or default to 3000
// Middleware to parse JSON bodies
app.use(bodyParser.json());
// Endpoint to handle POST requests containing JSON data
app.post('/processData', (req, res) => {
  // Assuming the JSON data sent from the frontend is in the req.body
  const data = req.body;
  // Process the JSON data
  const timestamp = data.timestamp;
  const feeling = data.feeling;
  const img1 = data.img1;
  const img2 = data.img2;
  const img3 = data.img3;
  // Do whatever processing you need with the data
  // For this example, let's just create a string with the timestamp and feeling
  const processedString = `Received data at timestamp ${timestamp}, feeling ${feeling}`;
  // Send the processed string back as response
  res.send(processedString);
});

// Endpoint to handle GET requests for testing
app.get('/test', (req, res) => {
  res.send('Server is working');
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
