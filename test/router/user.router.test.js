const request = require("supertest");
const appFactory = require("../../src/di");

const app = appFactory();

describe("user route /users", () => {
  it("GET / should return users", (done) => {
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
  
  it("GET /2 should return individual user", (done) => {
    request(app)
      .get("/users/2")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual({
          id: 2,
          name: "Jane",
          surname: "Doe",
        });
        done();
      })
      .catch((err) => done(err));
  });

  it("GET /999999 should return not found error message", (done) => {
    request(app)
      .get("/users/999999")
      .expect("Content-Type", /json/)
      .expect(404)
      .then((response) => {
        expect(response.body).toEqual({ message: "user 999999 not found"});
        done();
      })
      .catch((err) => done(err));
  });
});
