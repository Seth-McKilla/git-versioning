import request from "supertest";
import app from "../app.js";

describe("Test the root path", () => {
  test("Should respond to GET method", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
  });
});
