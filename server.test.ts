import { test, expect } from "vitest";
import request from "supertest";
import app from "./src/app.js";

test(`if the base route works as expected`, async () => {
  const response = await request(app).get("/");
  expect(response.statusCode).toBe(200);
  // über 250 ist ok
  console.log(response.text.length);
  //
  expect(response.text.length).toBeGreaterThan(250);
});

test("if /books route works", async () => {
  const response = await request(app).get("/books");
  //console.log(response);
  expect(response.statusCode).toBe(200);
});

test("if /books returns all books", async () => {
  const response = await request(app).get("/books");
  expect(response.statusCode).toBe(200);
  expect(JSON.parse(response.text).length).toBe(35);
});
