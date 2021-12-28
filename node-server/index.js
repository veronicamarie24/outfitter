const express = require("express");
const path = require('path')
const app = express();

const DIST_DIR = path.join(__dirname, '../react-client/dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');
const PORT = process.env.PORT || 2424;

app.use(express.static(path.join(__dirname, '..', 'react-client', 'build')));
app.use(express.static('public'));

app.get('/api', (req, res) => {
  res.send(mockResponse);
});

app.get('/*', (req,res) =>{
  res.sendFile(path.join(__dirname, '..', '/react-client/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});