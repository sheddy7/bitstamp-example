require('es6-promise').polyfill();
require('isomorphic-fetch');

const baseUrl = 'https://www.bitstamp.net/api/v2/ticker/';

const defaultHeaders = {
  'Content-Type': 'application/json'
};

const buildBitstampUrl = (ticker) => {

  if (!ticker) return null;

  return baseUrl + ticker;
}

const fetchBitstampData = (req, res, next) => {

  const url = buildBitstampUrl(req.query.ticker);

  fetch(url, defaultHeaders)
  .then(resp => resp.json())
  .then(resp => res.send(resp));
};

export default fetchBitstampData;
