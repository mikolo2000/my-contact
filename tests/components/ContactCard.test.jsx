import React from "react";
import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import ContactCard from "../../src/components/contactCard.jsx"
import "@testing-library/jest-dom/vitest"


describe("ContactCard", () => {
  it("should render a card with name and email", () => {
    render(<ContactCard name="Michael Cornelius" email ="mikolo@engineer.com"/>);
    screen.debug();
    const nameHeading = screen.getByRole("heading", { level: 5});
    expect(nameHeading).toBeInTheDocument();

    const email = screen.getByRole("paragraph");
    
    expect(email).toBeInTheDocument();
    expect(nameHeading).toHaveTextContent(/michael/i);
    expect(email).toHaveTextContent(/mikolo/i)
  });
});
