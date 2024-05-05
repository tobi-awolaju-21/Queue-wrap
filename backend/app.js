const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios'); // Import axios

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

app.post('/processData', async (req, res) => {
  const data = req.body;
  const timestamp = data.timestamp;
  const feeling = data.feeling;
  const img1 = data.img1;
  const img2 = data.img2;
  const img3 = data.img3;
  const img4 = data.img4;
  const imageLabel = "Animal";
  const imageLabe2 = "Animal";

  try {
    // First Chain
    const API_KEY = "AIzaSyBWaNaPOdgFWUyO7A-NiKq0fvop8t1JlPw";
    const url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro-latest:generateContent?key=" + API_KEY;
    const requestData = {
      "contents": [{
        "role": "user",
        "parts": [{
          "text": `<img data-sample-image-id="${imageLabel}" class="input-image" src="${img1}">generate a mini story that can caption the image but use the theme:${feeling}`
        }]
      }],
      "generationConfig": {
        "temperature": 1,
        "topK": 0,
        "topP": 0.95,
        "maxOutputTokens": 200,
        "stopSequences": []
      },
      "safetySettings": [{
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

    const response1 = await axios.post(url, requestData);
    const text1 = response1.data.candidates[0].content.parts[0].text.trim();

    // Second Chain
    const requestData2 = {
      "contents": [{
        "role": "user",
        "parts": [{
          "text": `<img data-sample-image-id="${imageLabe2}" class="input-image" src="${img2}">Make this funny and make it related to the image:${text1}`
        }]
      }],
      "generationConfig": {
        "temperature": 1,
        "topK": 0,
        "topP": 0.95,
        "maxOutputTokens": 200,
        "stopSequences": []
      },
      "safetySettings": [{
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

    const response2 = await axios.post(url, requestData2);
    const text2 = response2.data.candidates[0].content.parts[0].text.trim();

    res.json({ text: text2 });
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
