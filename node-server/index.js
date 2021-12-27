const express = require("express");
const path = require('path')
const app = express();

const PORT = process.env.PORT || 2424;

app.use(express.static(path.join(__dirname, '..', 'react-client', 'build')));
app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});