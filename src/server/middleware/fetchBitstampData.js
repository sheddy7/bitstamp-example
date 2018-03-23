require('es6-promise').polyfill();
require('isomorphic-fetch');

const url = 'https://www.bitstamp.net/api/ticker/';

const defaultHeaders = {
  'Content-Type': 'application/json'
};

const fetchBitstampData = (req, res, next) => {

  fetch(url, defaultHeaders)
  .then(resp => resp.json())
  .then(resp => res.send(resp));
};

export default fetchBitstampData;
