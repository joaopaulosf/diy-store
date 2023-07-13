import { Card } from "components/Card";

interface ProductsProps {
  productsTitle: string;
  cardQuantity: number;
  cardClass: string;
}

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
