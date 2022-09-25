const request = require("supertest");
const appFactory = require("../../src/di");

const app = appFactory();

describe("GET /users", () => {
  it("should return an array of users", (done) => {
    request(app)
      .get("/users")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual([
          {
            id: 1,
            name: "John",
            surname: "Doe",
          },
          {
            id: 2,
            name: "Jane",
            surname: "Doe",
          },
          {
            id: 3,
            name: "Jenny",
            surname: "Doe",
          },
        ]);
        done();
      })
      .catch((err) => done(err));
  });
});
