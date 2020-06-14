const chai = require('chai');
const expect = chai.expect;
const sendRequest = require('../lib/sendRequest');
const requestData = require('../data/data.json');

describe(`Get method response`, () => {
  let response;

  before(async () => {
    response = await sendRequest(requestData);
  });

  it(`status code of the obtained response should be 200 OK`, () => {
    expect(response.statusCode).to.eql(200);
  });

  it(`value of the content-type header is application/json; charset=utf-8`, () => {
    const contentTypeHeader = response.caseless.get('Content-Type');
    expect(contentTypeHeader).to.eql(`application/json; charset=utf-8`);
  });

  it(`the response body should be an array of 10 users`, () => {
    expect(response.body).to.be.a('array');
    expect(response.body.length).to.eql(10);
  });
})
