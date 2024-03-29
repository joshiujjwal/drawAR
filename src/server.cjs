const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const upload = multer({ dest: 'assets/' });

app.post('/uploadFile', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  // Do something with the uploaded file, such as saving it to a database or processing it

  res.status(200).send('File uploaded successfully.');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});