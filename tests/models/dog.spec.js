const { Dog, conn } = require("../../src/db.js");
const { expect } = require("chai");

describe("Dog model", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  describe("Validators", () => {
    beforeEach(() => Dog.sync({ force: true }));
    describe("name", () => {
      it("should throw an error if name is null", (done) => {
        Dog.create({})
          .then(() => done(new Error("It requires a valid name")))
          .catch(() => done());
      });
      it("should throw an error if weigth is null", (done) => {
        Dog.create({})
          .then(() => done(new Error("It requires a valid name")))
          .catch(() => done());
      });
      it("should throw an error if heigth is null", (done) => {
        Dog.create({})
          .then(() => done(new Error("It requires a valid name")))
          .catch(() => done());
      });
      it("should throw an error if temperament is null", (done) => {
        Dog.create({})
          .then(() => done(new Error("It requires a valid name")))
          .catch(() => done());
      });
      it("should work when its a valid name", () => {
        Dog.create({ name: "Pug" });
      });
      it("should work when its a valid weight", () => {
        Dog.create({ weight: 10 });
      });
      it("should work when its a valid height", () => {
        Dog.create({ height: 10 });
      });
      it("should work when its a valid temperament", () => {
        Dog.create({ temperament: ["Brave", "Alert"] });
      });
    });
  });
});
