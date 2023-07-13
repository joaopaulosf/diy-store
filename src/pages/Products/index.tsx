import { ProductCards } from "components/ProductCards";

export const Products = () => {
  return (
    <>
      <ProductCards
        productsTitle="Products"
        cardQuantity={12}
        cardClass="card"
      />
    </>
  );
};
