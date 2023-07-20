import { useParams } from "react-router-dom";

import { formatCurrency } from "utils";
import { ImageSwiper } from "./components/imageSwiper";
import { ErrorPage } from "pages/Error";
import { useShoppingCart } from "hooks/useShoppingCart";

export const SingleProduct = () => {
  const { productId } = useParams();
  const { getItemQuantity, increaseQuantity, getCartItem, removeFromCart } =
    useShoppingCart();
  const product = getCartItem(Number(productId));

  if (!product) {
    return <ErrorPage />;
  }

  const { id, name, price, sale, description } = product;

  const quantity = getItemQuantity(Number(id));

  const addToCart = () => increaseQuantity(Number(id));
  const removeCart = () => removeFromCart(Number(id));

  return (
    <section className="product">
      <ImageSwiper product={product} />
      <div className="product__content">
        <h1 className="product__title">{name}</h1>
        <span className="product__price">
          {sale ? formatCurrency(sale) : formatCurrency(price)}
        </span>
        {sale && (
          <p className="product__price product__price--sale">
            {formatCurrency(price)}
          </p>
        )}
        <button className="product__button" onClick={addToCart}>
          Add to cart {quantity ? <span>(x{quantity})</span> : null}
        </button>
        {quantity ? (
          <button className="product__button" onClick={removeCart}>
            Remove
          </button>
        ) : null}
        <p className="product__description">{description}</p>
      </div>
    </section>
  );
};
