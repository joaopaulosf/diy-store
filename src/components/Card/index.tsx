import { Link } from "react-router-dom";

import products from "data/products.json";
import { CardProps, ProductProps } from "models";
import { formatCurrency } from "utils";

export const Card = ({ cardClass, stopRenderAt }: CardProps) => {
  const items: ProductProps[] = products.slice(0, stopRenderAt);

  return (
    <>
      {items.map((item) => (
        <Link to={`/products/${item.id}`} key={item.id} className={cardClass}>
          {item.sale && <span className="card__sale">sale</span>}
          <img src={item.image.main} alt={item.name} className="card__image" />
          <div className="card__content">
            <h1 className="card__name">{item.name}</h1>
            <p className="card__price">
              {item.sale
                ? formatCurrency(item.sale)
                : formatCurrency(item.price)}
            </p>
            {item.sale && (
              <p className="card__price card__price--sale">
                {formatCurrency(item.price)}
              </p>
            )}
          </div>
        </Link>
      ))}
    </>
  );
};
