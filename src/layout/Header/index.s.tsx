import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AppRoutes } from "config/routes";
import { BrowserRouter } from "react-router-dom";

import { Header } from ".";

describe("Header render corectly", () => {
  it("should background image load", () => {
    render(<Header />, { wrapper: BrowserRouter });
    expect(screen.getByAltText(/background-woman/i)).toBeInTheDocument();
  });

  it("should shop all button work", async () => {
    render(<AppRoutes />);

    await userEvent.click(screen.getByRole("link", { name: "Shop all" }));
    expect(screen.getByText(/products/i)).toBeInTheDocument();
  });
});
