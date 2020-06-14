const request = require('request-promise-native');
const endpoint = require('../endpoint/endpoint.json');

function sendRestRequestWithHeader(opts) {
  let options = {
      uri: endpoint.uri + opts.uri,
      method: opts.method,
      headers: opts.header,
      resolveWithFullResponse: true,
      json: true
  };

  return request(options).then((response) => {
      return response;
  });

};

module.exports = sendRestRequestWithHeader;
