const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios'); // Import axios
const app = express();
const fs = require('fs');
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
  var slangs;
  const filePath = './doc.txt';


  // Read the contents of the file
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  slangs =  data;
});

  const API_KEY = "AIzaSyBWaNaPOdgFWUyO7A-NiKq0fvop8t1JlPw"; // Insert your API key here
  const url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro-latest:generateContent?key=" + API_KEY;
  const requestData = {
    "contents": [
      {
        "role": "user",
        "parts": [
          {
            "text": `<img data-sample-image-id="${imageLabel}" class="input-image" src="${img1}"><img data-sample-image-id="${imageLabel}"  class="input-image" src="${img2}"><img data-sample-image-id="${imageLabel}" class="input-image" src="${img3}"><img data-sample-image-id="${imageLabel}"class="input-image" src="${img4}">using observations from those images, and this theme:${feeling}, generate 4 diffrent very short, single sentence comment that can be posted on social media, it should have a title, and texts that sound like something out of sportify wrap, starting each sentence with "you" for example"your Dressing personality: The Maverick", you are to also spice it up with the perfect slang from ${slangs} also put an hashtag(#) in front of the slang you decide to use,for example"your Dressing personality is #Giving: The Maverick, return the 4 comments as a json in your response with keys comment1, comment2,comment3, commment4"`
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
