import { useShoppingCart } from "context/ShoppingCart";
import products from "data/products.json";
import { ErrorPage } from "pages/Error";
import { formatCurrency } from "utils";

type CartItemProps = {
  id: number;
  quantity: number;
};

export const CartItem = ({ id, quantity }: CartItemProps) => {
  const { decreaseQuantity, increaseQuantity } = useShoppingCart();
  const item = products.find((item) => Number(item.id) === id);

  if (!item) {
    return <ErrorPage />;
  }

  return (
    <section className="item">
      <img src={item.image.main} alt={item.name} className="item__image" />
      <section className="item__info">
        <h2 className="item__name">{item.name}</h2>
        <span className="item__price">
          {item.sale ? formatCurrency(item.sale) : formatCurrency(item.price)}
        </span>
        <div className="item__actions">
          <span
            className="item__signal"
            onClick={() => decreaseQuantity(Number(item.id))}
          >
            -
          </span>
          <span className="item__quantity">{quantity}</span>
          <span
            className="item__signal"
            onClick={() => increaseQuantity(Number(item.id))}
          >
            +
          </span>
        </div>
      </section>
      <section className="item__total">
        <span>
          {item.sale
            ? formatCurrency(item.sale * quantity)
            : formatCurrency(item.price * quantity)}
        </span>
      </section>
    </section>
  );
};
