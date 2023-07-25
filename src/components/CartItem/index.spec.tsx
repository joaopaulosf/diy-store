import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { CartItem } from ".";

const mockIncrease = jest.fn();
const mockDecrease = jest.fn();
const mockRemove = jest.fn();
jest.mock("hooks/useShoppingCart", () => ({
  useShoppingCart: () => ({
    increaseQuantity: mockIncrease,
    decreaseQuantity: mockDecrease,
    removeFromCart: mockRemove,
    getCartItem: jest.fn(() => ({
      id: 1,
      name: "Test Item",
      image: { main: "test-image.jpg" },
      price: 10,
      sale: 6,
    })),
  }),
}));

describe("CartItem", () => {
  it("should render card corectly", () => {
    const { getByRole, getByText } = render(<CartItem id={1} quantity={2} />, {
      wrapper: BrowserRouter,
    });

    const itemElement = getByRole("group");
    const headingElement = getByRole("heading");
    const itemQuantity = getByText("2", { selector: "span" });
    const itemPrice = getByText("$6.00", { selector: "span" });
    const itemTotal = getByText("$12.00", { selector: "span" });

    expect(itemElement).toBeInTheDocument();
    expect(itemElement).toHaveClass("item");
    expect(headingElement).toHaveTextContent(/test item/i);
    expect(itemQuantity).toBeInTheDocument();
    expect(itemPrice).toBeInTheDocument();
    expect(itemTotal).toBeInTheDocument();
  });

  it("should actions work corectly", async () => {
    const user = userEvent.setup();
    const { getByText, getByTitle } = render(<CartItem id={1} quantity={2} />, {
      wrapper: BrowserRouter,
    });

    const decrease = getByText("-", { selector: ".item__signal" });
    const increase = getByText("+", { selector: ".item__signal" });
    const remove = getByTitle(/remove/i);

    await user.click(increase);
    await user.dblClick(decrease);
    await user.click(remove);

    expect(mockIncrease).toHaveBeenCalledTimes(1);
    expect(mockDecrease).toHaveBeenCalledTimes(2);
    expect(mockRemove).toHaveBeenCalledTimes(1);
  });
});
