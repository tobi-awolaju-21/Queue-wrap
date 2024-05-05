const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios'); // Import axios
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

app.post('/processData', async (req, res) => { // Use async function
  const data = req.body;
  const timestamp = data.timestamp;
  const feeling = data.feeling;
  const img1 = data.img1;
  const img2 = data.img2;
  const img3 = data.img3;
  const img4 = data.img4;
  var imageLabel = "People";

  const API_KEY = "AIzaSyBWaNaPOdgFWUyO7A-NiKq0fvop8t1JlPw"; // Insert your API key here
  const url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro-latest:generateContent?key=" + API_KEY;
  const requestData = {
    "contents": [
      {
        "role": "user",
        "parts": [
          {
            "text": `<img data-sample-image-id="${imageLabel}" class="input-image" src="${img1}"><img data-sample-image-id="${imageLabel}"  class="input-image" src="${img2}"><img data-sample-image-id="${imageLabel}" class="input-image" src="${img3}"><img data-sample-image-id="${imageLabel}"class="input-image" src="${img4}">using observations from those images, and this theme:${feeling}, I want you to generate a wrap that can be posted on social media, it should have a title, and texts that sound like something out of sportify wrap, starting each sentence with "you" for example"your Dressing personality: The Maverick"`
          }
        ]
      }
    ],
    "generationConfig": {
      "temperature": 1,
      "topK": 0,
      "topP": 0.95,
      "maxOutputTokens": 200,
      "stopSequences": []
    },
    "safetySettings": [
      {
        "category": "HARM_CATEGORY_HARASSMENT",
        "threshold": "BLOCK_MEDIUM_AND_ABOVE"
      },
      {
        "category": "HARM_CATEGORY_HATE_SPEECH",
        "threshold": "BLOCK_MEDIUM_AND_ABOVE"
      },
      {
        "category": "HARM_CATEGORY_SEXUALLY_EXPLICIT",
        "threshold": "BLOCK_MEDIUM_AND_ABOVE"
      },
      {
        "category": "HARM_CATEGORY_DANGEROUS_CONTENT",
        "threshold": "BLOCK_MEDIUM_AND_ABOVE"
      }
    ]
  };

  try {
    const response = await axios.post(url, requestData);
    const text = response.data.candidates[0].content.parts[0].text.trim();
    res.json({ text });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/test', (req, res) => {
  res.send('Server is working');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
