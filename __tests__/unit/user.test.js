const bcrypt = require("bcryptjs");
const { User } = require("../../src/app/models");
const truncate = require("../utils/truncate");

describe("User", () => {
  beforeAll(async () => {
    await truncate();
  });

  it("should encrypt user password", async () => {
    const user = await User.create({
      name: "Gabriel",
      email: "gabriel.ctiunesp@gmail.com",
      password: "123321",
    });

    const compareHash = await bcrypt.compare("123321", user.password_hash);

    expect(compareHash).toBe(true);
  });
});
