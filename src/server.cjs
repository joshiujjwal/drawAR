const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const fs = require('fs');

app.use('/assets', express.static(path.join(__dirname, 'assets')))

const getFiles = (directoryPath) => {
  try {
    const files = fs.readdirSync(directoryPath);
    return files;
  } catch (err) {
    console.error(err);
    return [];
  }
};

const assetsDirectoryPath = path.join(__dirname, 'assets');
const files = getFiles(assetsDirectoryPath);

app.get('/getFiles', (req, res) => {
  const filesWithId = files.map((file, index) => {
    return {
      id: index + 1,
      name: file
    };
  });
  res.status(200).send({ data: filesWithId });
}
);

const upload = multer({ dest: path.join(__dirname, 'assets') });

app.post('/uploadFile', upload.single('file'), async (req, res) =>  {
  const file = req.file;
  const fileName = path.parse(file.originalname).name;

  const directoryPath = path.join(__dirname, 'assets', fileName);
  if(fs.existsSync(directoryPath))
  {
    fs.rm(directoryPath, { recursive: true });
  }

  await fs.mkdir(directoryPath, { recursive: true }, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error creating directory');
    }
    // Directory created successfully
  });
  
  const filePath = path.join(directoryPath, file.originalname);
  fs.rename(file.path, filePath, (err) => {
    if (err) {
      console.error(err);Í
      return res.status(500).send('Error saving file');
    }
    fs.rm(file.path, { recursive: true });
    res.status(200).send('File uploaded successfully');
  });
});


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});