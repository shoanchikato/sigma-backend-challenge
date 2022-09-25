const request = require("supertest");
const appFactory = require("../src/di");

const app = appFactory();

describe("GET /hello", () => {
  it("should return a 'hello world' string", (done) => {
    request(app)
      .get("/hello")
      .expect("Content-Type", /text/)
      .expect(200)
      .then((response) => {
        expect(response.text).toEqual("hello world");
        done();
      })
      .catch((err) => done(err));
  });
});
