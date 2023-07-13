import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AppRoutes } from "config/routes";

describe("navigation-bar should work fine", () => {
  it("should start at home page", async () => {
    render(<AppRoutes />);
    expect(screen.getByAltText(/background-woman/i)).toBeInTheDocument();
  });

  it("should render home page", async () => {
    render(<AppRoutes />);
    await userEvent.click(screen.getByAltText(/brand-icon/i));
    expect(screen.getByAltText(/background-woman/i)).toBeInTheDocument();
  });

  it("should render products page", async () => {
    render(<AppRoutes />);
    await userEvent.click(screen.getByRole("link", { name: "Buy now" }));
    expect(screen.getByText(/products/i)).toBeInTheDocument();
  });

  it("should render login page", async () => {
    render(<AppRoutes />);
    await userEvent.click(screen.getByRole("link", { name: "Login" }));
    expect(screen.getByText(/create acount/i)).toBeInTheDocument();
  });

  it("should render cart page", async () => {
    render(<AppRoutes />);
    await userEvent.click(screen.getByTitle(/cart/i));
    expect(screen.getByText(/your cart/i)).toBeInTheDocument();
  });
});
