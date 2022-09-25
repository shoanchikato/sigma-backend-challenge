const request = require("supertest");
const appFactory = require("../../src/di");

const app = appFactory();

describe("stream router", () => {
  it("PUT /2 should return increase the number of streams by number of action.streams", (done) => {
    request(app)
      .put("/streams/2")
      .send({ action: "increase", streams: 2 })
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual({
          id: 2,
          name: "Jane",
          surname: "Doe",
          streams: 4,
        });
        done();
      })
      .catch((err) => done(err));
  });
});
