import { useInView } from "react-intersection-observer";

import { Card } from "components/Card";
import { ProductsProps } from "models";

export const ProductCards = ({
  productsTitle,
  cardQuantity,
  cardClass,
}: ProductsProps) => {
  const { ref: myRef, inView: myElementIsVisible } = useInView();

  return (
    <section
      ref={myRef}
      className={`${"products"} ${myElementIsVisible ? "products-show" : ""}`}
    >
      <h1 className="products__title">{productsTitle}</h1>
      <div className="products__cards">
        <Card stopRenderAt={cardQuantity} cardClass={cardClass} />
      </div>
    </section>
  );
};
