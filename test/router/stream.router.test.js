const request = require("supertest");
const appFactory = require("../../src/di");

let app = null;

beforeEach(async () => {
  app = await appFactory();
});

describe("stream router", () => {
  it("PUT /2 should return increase the number of streams by number of action.streams", (done) => {
    request(app)
      .put("/streams/2")
      .send({ action: "increase", streams: 1 })
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual({
          _id: 2,
          name: "Jane",
          surname: "Doe",
          streams: 3,
        });
        done();
      })
      .catch((err) => done(err));
  });

  it("should return error if stream exceed limit", (done) => {
    request(app)
      .put("/streams/2")
      .send({ action: "increase", streams: 2 })
      .expect("Content-Type", /json/)
      .expect(400)
      .then((response) => {
        expect(response.body).toEqual({
          message: "excessed streaming limit of 3",
        });
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  it("should return error if stream goes below limit", (done) => {
    request(app)
      .put("/streams/2")
      .send({ action: "decrease", streams: 3 })
      .expect("Content-Type", /json/)
      .expect(400)
      .then((response) => {
        expect(response.body).toEqual({
          message: "streams can't not be less than 0",
        });
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  it("should return not found error message", (done) => {
    request(app)
      .put("/streams/999999")
      .expect("Content-Type", /json/)
      .expect(404)
      .then((response) => {
        expect(response.body).toEqual({ message: "user 999999 not found"});
        done();
      })
      .catch((err) => done(err));
  });
});
