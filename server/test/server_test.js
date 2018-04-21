const expect = require("chai").expect;  //
// const should = require("should");
// const server = require("../server.js");
const request = require("request");
const express = require("express");
const app = express();

describe("listen", () => {
  it("should listen to port 3030", (done) => {  //
    // app.listen('http://localhost:3030/', (err, res, body) => { // It can't use app.listen for testing
    request('http://localhost:3030/', (err, res, body) => {
      expect(body).to.equal("Hello World");
      done();
    });
  });
});
