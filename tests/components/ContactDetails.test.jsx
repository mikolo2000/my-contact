import React from "react";
import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import ContactDetails from "../../src/components/contactDetails.jsx"
import "@testing-library/jest-dom/vitest"


describe("ContactDetails", () => {
  it("should render a table with the contact details", () => {
    render(<ContactDetails firstName="Cornelius" lastName="Michael" gender="male" age="24" phone="+2349037145892" email ="mikolo@engineer.com"/>);
    
    expect(screen.getByText(/first/i, /last/i, /gender/i, /age/i, /email/i, /phone/i)).toBeInTheDocument();
    
    expect(screen.getByText(/cornelius/i, /Michael/i, /Male/i, /24/i, /mikolo/i, /234/i)).toBeInTheDocument();
  });
});
