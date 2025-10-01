
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "./index";

describe("Footer component", () => {
  it("should render the footer with correct text", () => {
    render(<Footer />);

    // Verifica se o texto está presente
    
    const footerElement = screen.getByText(/Agencia Turismo/i);
    expect(footerElement).toBeInTheDocument();
  });
});
