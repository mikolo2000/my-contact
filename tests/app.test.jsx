import React from "react";
import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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
     await server.use(
      http.get(
        "https://dummyjson.com/users?limit=20&select=id,firstName,lastName,gender,email,phone,age",
        () => HttpResponse.text('Server Error', {status: 500})
      )
    );
    render(<App />);

    const error = await screen.findByText(/error/i);
    
    expect(error).toBeInTheDocument;
  });

  it("should show full details of selected contact", async () => {
    render(<App />);

    const users = await screen.findAllByRole("heading", { level: 5 });

    await userEvent.click(users[2]);
    

    expect(await screen.findByText(/first name/i)).toBeInTheDocument();
    expect(await screen.findByText(/last name/i)).toBeInTheDocument();
    expect(await screen.findByText(/gender/i)).toBeInTheDocument();
    expect(await screen.findByText(/age/i)).toBeInTheDocument();
    expect(await screen.findByText(/email/i)).toBeInTheDocument();

  });


});
