import { PiTrashLight as Trash } from "react-icons/pi";

import ErrorPage from "pages/ErrorPage";
import { formatCurrency } from "utils";
import { CartItemProps } from "models";
import { useShoppingCart } from "hooks/useShoppingCart";

export const CartItem = ({ id, quantity }: CartItemProps) => {
  const { decreaseQuantity, increaseQuantity, removeFromCart, getCartItem } =
    useShoppingCart();

  const item = getCartItem(id);

  if (!item) {
    return <ErrorPage />;
  }

  const { id: productId, name, image, price, sale } = item;
  const itemId = Number(productId);

  return (
    <section className="item" role="group">
      <img src={image.main} alt={name} className="item__image" />
      <section className="item__info">
        <h2 className="item__name">{name}</h2>
        <span className="item__price">
          {sale ? formatCurrency(sale) : formatCurrency(price)}
        </span>
        <div className="item__actions">
          <span
            className="item__signal"
            onClick={() => decreaseQuantity(itemId)}
          >
            -
          </span>
          <span className="item__quantity">{quantity}</span>
          <span
            className="item__signal"
            onClick={() => increaseQuantity(itemId)}
          >
            +
          </span>
          <Trash
            className="item__trash"
            title="remove"
            onClick={() => removeFromCart(itemId)}
          />
        </div>
      </section>
      <section className="item__total">
        <span>{formatCurrency((sale || price) * quantity)}</span>
      </section>
    </section>
  );
};
