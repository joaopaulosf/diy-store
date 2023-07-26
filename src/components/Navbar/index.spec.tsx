import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AppRoutes } from "config/routes";
import { routesConfig } from "config/routes/routesConfig";
import { RouterProvider, createMemoryRouter } from "react-router-dom";

const router = createMemoryRouter(routesConfig, {
  initialEntries: ["/"],
});

const user = userEvent.setup();

describe("navigation-bar should work fine", () => {
  it("should start at home page", async () => {
    const { getByAltText } = render(<RouterProvider router={router} />);
    expect(getByAltText(/background-woman/i)).toBeInTheDocument();
  });

  it("should render home page", async () => {
    const { getByAltText } = render(<RouterProvider router={router} />);

    const brandIcon = getByAltText(/brand-icon/i);
    const bgWoman = getByAltText(/background-woman/i);

    await user.click(brandIcon);
    expect(bgWoman).toBeInTheDocument();
  });

  it("should render products page", async () => {
    const { getByRole } = render(<RouterProvider router={router} />);

    await user.click(getByRole("link", { name: /buy now/i }));
    expect(getByRole("heading", { name: /products/i })).toBeInTheDocument();
  });

  it("should render login page", async () => {
    const { getByText, getByRole } = render(<RouterProvider router={router} />);

    await user.click(getByRole("link", { name: /login/i }));
    expect(getByText(/sign in/i)).toBeInTheDocument();
  });

  it("should render cart page", async () => {
    const { getByRole, getByTitle } = render(<AppRoutes />);
    await user.click(getByTitle(/cart/i));
    expect(getByRole("heading", { name: /your cart/i })).toBeInTheDocument();
  });
});
