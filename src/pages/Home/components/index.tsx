import { ProductCards } from "components/ProductCards";
import { About } from "./About";

export const Main = () => {
  return (
    <>
      <About />
      <ProductCards
        productsTitle="Featured products"
        cardQuantity={8}
        cardClass="card"
      />
    </>
  );
};
