const express = require("express");
const bodyParser = require('body-parser');

export const PORT = 3001;

import fetchBitstampData from './middleware/fetchBitstampData';
import view from './views/index';

const app = express();

app.set("port", PORT);

app.use(bodyParser.json());

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get('/', (req, res) => {

  res.set('Content-Type', 'text/html');

  res.send(view());
});

app.get('/api/bitstamp', fetchBitstampData);

app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`);
});
