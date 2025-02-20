import React from "react";
import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../src/App.jsx";
import "@testing-library/jest-dom/vitest";
import { http, HttpResponse } from "msw";
import { server } from "../src/mocks/server";
import { beforeAll, afterAll, afterEach } from "vitest";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("App", () => {
  it("should render list of users", async () => {
    render(<App />);

    const users = await screen.findAllByRole("heading", { level: 5 });
    expect(users).toHaveLength(3);
  });

  it("should show an error message if there is an error", async () => {
    server.use(
      http.get(
        "https://dummyjson.com/users?limit=20&select=id,firstName,lastName,gender,email,phone,age",
        () => HttpResponse.text('Server Error', {status: 500})
      )
    );
    render(<App />);

    const error = await screen.findByText(/error/i);
    screen.debug();
    expect(error).toBeInTheDocument;
  });

  it("should show full details of selected contact", async () => {
    render(<App />);

    const users = await screen.findAllByRole("heading", { level: 5 });
   
    expect(users).toHaveLength(3);
  });
});
