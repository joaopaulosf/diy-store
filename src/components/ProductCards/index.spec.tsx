import { render } from "@testing-library/react";
import { ProductCards } from ".";
import { BrowserRouter } from "react-router-dom";

describe("ProductCards", () => {
  it("should render", () => {
    const { getByRole, getAllByRole } = render(
      <ProductCards
        productsTitle="Products"
        cardClass="card"
        cardQuantity={2}
      />,
      { wrapper: BrowserRouter }
    );

    const titleElement = getByRole("heading", { name: /products/i });
    const productCards = getAllByRole("link");
    const productClass = getByRole("link", { name: /bluetooth and fm radio/i });

    expect(titleElement).toBeInTheDocument();
    expect(productCards).toHaveLength(2);
    expect(productClass).toHaveClass("card");
  });
});
