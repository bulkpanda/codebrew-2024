const express = require('express');
const multer = require('multer');
const cors = require("cors");
const fs = require('fs');
const vision = require('@google-cloud/vision');

// require("dotenv").config(".env.development.local");
require("dotenv").config();

// multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/') 
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  });
const upload = multer({ storage: storage });
// multer

// openai

const OpenAIApi = require('openai');

const openai = new OpenAIApi({ apiKey: process.env.openAI_apiKey });
const openAIModel = process.env.openAI_model;

// openai

// 
const ips = process.env.ips
const ports = process.env.ports;
// 

const app = express();
app.use(express.json())
app.use(
  cors({
    origin: [
      "http://127.0.0.1:5173",
      "http://127.0.0.1:5174",
      "http://localhost:5173",
      "http://localhost:5174",
    ],
  })
);

app.post("/openAI", async (req, res) => {
    const ourPrompt = req.body.prompt;

    const completePrompt = `
    User's prompt: ${ourPrompt}.
    Distinguish each food from user's promot. Then, for each food, list its primary nutrient, approximate nutrient amount. Your answer should be exclusively in JSON format with following properties:
    {
      foodName: string,
      nutrient: string,

    }
  `;
  const promptResponse = await openai.createChatCompletion({
    model: openAIModel,
    messages: [
      {
        role: "system",
        content: "role: a knowledgeable assistant in any topic imaginable. Audience: high school and university students."
      }, 
      {
        role: "user",
        content: completePrompt
      }],
    temperature: 0.5,
  });

  console.log(promptResponse.data.choices[0].message);
  try {
    const parsedContent = JSON.parse(promptResponse.data.choices[0].message.content);
    res.status(200).json(parsedContent);
  } catch (error) {
    console.error("Error parsing message content:", error);
    res.status(500).send("Failed to parse the message content");
  }
});

const googleVis_apiKey = process.env.googleVis_apiKey;
const { spawn } = require('child_process');
app.post('/googleVision', upload.single('image'), async (req, res) => {
  // receiving files from user
  if (!req.file) {
    return res.status(400).send('No image uploaded.');
  }
  const filePath = req.file.path;
  const visionClient = new vision.ImageAnnotatorClient({
    keyFilename: googleVis_apiKey
  });
  const request = {
    image: {content: fs.readFileSync(filePath)},
  };

  // sending files to googleVision
  const [result] = await visionClient.objectLocalization(request);
  const objects = result.localizedObjectAnnotations;
  // console.log(objects);

  // processing responses from googleVison to json format
  let names = "";
  objects.forEach(object => {
    names += object.name.toString();
    names += "$"
  });
  
  // testing response from googleVision
  // let names = 'Apple$Apple$Fruit$Fruit$Fruit$Fruit$Fruit$Peach$Orange$Orange$';
  // testing response from googleVision

  const pythonProcess = spawn('python', ['imageVision/readLabel.py'], {});
  pythonProcess.stdin.write(names);
  pythonProcess.stdin.end();
  console.log(pythonProcess)

  let dataStr = '';
  pythonProcess.stdout.on('data', (data) => {
      dataStr += data.toString();
      console.log(dataStr);
  });

  pythonProcess.stderr.on('data', (data) => {
      console.error(`stderr: ${data}`);
  });

  pythonProcess.on('error', (error) => {
      console.error(`Failed to start Python script: ${error}`);
      res.status(500).send('Failed to start Python script');
  });

  pythonProcess.on('close', (code) => {
      console.log(`Python script exited with code ${code}`);
      if (code !== 0) {
          console.error(`Python script exited with code ${code}`);
          return res.status(500).send(`Python script exited with code ${code}`);
      }
      try {
          const labels = JSON.parse(dataStr);
          console.log(labels);
          res.json(labels);
      } catch (error) {
          console.error('Error parsing JSON from Python script:', error);
          res.status(500).send('Error parsing labels from Python script');
      }
  });
});

// curl -X POST -F "image=@E:\projects\codebrew-2024\backend\imageVision\res\th.jpg" http://localhost:8080/googleVision
app.listen(8080, () => {
    console.log("Listening on port 8080");
});

