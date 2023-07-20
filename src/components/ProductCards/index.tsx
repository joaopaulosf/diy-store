import { Card } from "components/Card";
import { ProductsProps } from "models";

export const ProductCards = ({
  productsTitle,
  cardQuantity,
  cardClass,
}: ProductsProps) => {
  return (
    <section className="products">
      <h1 className="products__title">{productsTitle}</h1>
      <div className="products__cards">
        <Card stopRenderAt={cardQuantity} cardClass={cardClass} />
      </div>
    </section>
  );
};
