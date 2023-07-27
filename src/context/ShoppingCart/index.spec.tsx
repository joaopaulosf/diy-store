import { render } from "@testing-library/react";
import { ShoppingCartContext, ShoppingCartProvider } from ".";
import { useContext } from "react";

Storage.prototype.setItem = jest.fn((value) => {
  return JSON.stringify(value);
});
Storage.prototype.getItem = jest.fn(() => {
  return JSON.stringify([{ id: 1, quantity: 2 }]);
});

describe("ShoppingCart Context", () => {
  it("renders children correctly", () => {
    const { getByText } = render(
      <ShoppingCartProvider>
        <div>Children content</div>
      </ShoppingCartProvider>
    );
    const childrenElement = getByText(/children content/i);
    expect(childrenElement).toBeInTheDocument();
  });

  it("creates ShoppingCartContext with initial values", () => {
    const TestComponent = () => {
      const { cartItems, cartQuantity, getItemQuantity } =
        useContext(ShoppingCartContext);
      expect(cartItems).toEqual([{ id: 1, quantity: 2 }]);
      expect(cartQuantity).toBe(2);
      expect(getItemQuantity(1)).toBe(2);
      return null;
    };

    render(
      <ShoppingCartProvider>
        <TestComponent />
      </ShoppingCartProvider>
    );
  });
});
