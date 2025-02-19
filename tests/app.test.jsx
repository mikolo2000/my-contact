import React from "react";
import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../src/App.jsx"
import "@testing-library/jest-dom/vitest"




describe("App", () => {


  it("should render list of users", async () => {
    render(<App/>);

    
    const users = await screen.findAllByRole("heading", {level:5});
    screen.debug();
    expect(users).toHaveLength(3);
  });
});
