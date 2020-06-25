const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Serve up the dist folder from the client at the defined PORT
app.use(express.static(path.resolve(__dirname, '../../client/dist')));

/* This is to allow the app to send the dist html file no matter the params in the request */
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/dist', 'index.html'));
});

app.listen(3006, () => {
  console.log('Listening on 3006');
});
