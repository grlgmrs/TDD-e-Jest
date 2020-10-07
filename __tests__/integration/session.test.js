const request = require("supertest");

const app = require("../../src/app");
const { User } = require("../../src/app/models");
const truncate = require("../utils/truncate");

describe("Registration", () => {
  beforeEach(async () => {
    await truncate();
  });

  it("should create a user", async () => {
    const user = await User.create({
      name: "Gabriel",
      email: "gabriel.ctiunesp@gmail.com",
      password_hash: "123321",
    });

    expect(user.email).toBe("gabriel.ctiunesp@gmail.com");
  });
});

describe("Authentication", () => {
  it("should authenticate with valid credentials", async () => {
    const response = await request(app).post("/sessions").send({
      email: "gabriel.citunesp@gmail.com",
      password: "123321",
    });

    expect(response.status).toBe(200);
  });

  //it("should receive JWT token when authenticated with valid credentials", () => {});
});
