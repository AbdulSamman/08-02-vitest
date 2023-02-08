import { test, expect } from "vitest";
import request from "supertest";
import app from "./src/app.js";

test(`if the base route works as expected`, async () => {
  const response = await request(app).get("/");
  expect(response.statusCode).toBe(200);
});
