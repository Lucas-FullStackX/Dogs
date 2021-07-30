/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require("chai");
const session = require("supertest-session");
const app = require("../../src/app.js");
const { Dog, conn } = require("../../src/db.js");

const agent = session(app);
const dog = {
  name: "PugHenry",
  id: "2629f014-cbd1-49d1-97b8-3cdc27dabf20",
  temperament: ["Brave", "Alert"],
  height: 10,
  weight: 10,
  years: 10,
};
const dogHenry = {
  name: "PugHenry",
  temperament: ["Brave", "Alert"],
  height: 10,
  weight: 10,
  years: 10,
};

describe("Dog routes", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  beforeEach(() => Dog.sync({ force: true }).then(() => Dog.create(dog)));
  describe("GET /dogs", () => {
    it("should get 200", () => agent.get("/dogs").expect(200));
    it("responds with 8 dogs", () =>
      agent.get("/dogs").then((res) => {
        expect(res.body.length).to.be.equal(8);
      }));
  });
  describe("GET /dogs?name=pug", () => {
    it("should get 200", () => agent.get("/dogs?name=pug").expect(200));
    it("responds with 8 dogs", () =>
      agent.get("/dogs?name=pug").then((res) => {
        expect(res.body[0].name).to.be.equal("PugHenry");
      }));
  });
  describe("GET /dogs/:pugId", () => {
    it("should get 200", () => agent.get("/dogs/15").expect(200));
    it("responds with 8 dogs", () =>
      agent.get("/dogs/201").then((res) => {
        expect(res.body[0].name).to.be.equal("Pug");
      }));
  });
  describe("GET /temperament", () => {
    it("should get 200", () => agent.get("/temperament").expect(200));
  });
  describe("POST /dog", () => {
    it("should get 200", () => agent.post("/dog").send(dogHenry).expect(200));
  });
});
