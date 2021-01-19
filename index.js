const path = require('path');

const express = require('express');
const app = express();

app.use('/', express.static(path.join(__dirname, 'docs')))

app.listen(8080, function(){
  console.log("Listening on port 8080")
});
