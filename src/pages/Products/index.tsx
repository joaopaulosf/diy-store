import { ProductCards } from "components/ProductCards";

export default function Products() {
  return (
    <>
      <ProductCards
        productsTitle="Products"
        cardQuantity={12}
        cardClass="card"
      />
    </>
  );
}
