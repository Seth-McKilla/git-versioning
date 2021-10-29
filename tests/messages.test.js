import fs from "fs";
import request from "supertest";
import app from "../app.js";

beforeEach(() => {
  fs.writeFileSync("../db.json", "");
});

describe("Test the root path", () => {
  test("Should respond to GET method", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
  });

  test("Should set a message with the POST method", async () => {
    const response = await request(app)
      .post("/")
      .send({ message: "Test message" });
    expect(response.statusCode).toBe(201);
    expect(response.body).toEqual({ message: "Test message" });
  });

  test("Should get the new message", async () => {
    const response = await request(app).get("/");
    expect(response.body).toEqual({ message: "Test message" });
  });
});
