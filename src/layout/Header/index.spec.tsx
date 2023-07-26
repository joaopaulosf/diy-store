import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import { Header } from ".";

describe("Header render corectly", () => {
  it("should background image load", () => {
    render(<Header />, { wrapper: BrowserRouter });
    expect(screen.getByAltText(/background-woman/i)).toBeInTheDocument();
  });
});
