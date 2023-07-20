import { Link } from "react-router-dom";
import { PiPaypalLogoThin as Paypal } from "react-icons/pi";

import { CartItem } from "components/CartItem";
import { ProductCards } from "components/ProductCards";
import products from "data/products.json";
import { formatCurrency } from "utils";
import { useShoppingCart } from "hooks/useShoppingCart";

export const Cart = () => {
  const { cartItems } = useShoppingCart();

  return (
    <section className="cart">
      <section className="cart__content">
        <div className="cart__title">
          <h1 className="cart__heading">Your cart</h1>
          <Link to={"/products"} className="cart__link">
            continue shopping
          </Link>
        </div>
        <div className="cart__info">
          <span className="cart__products">PRODUCT</span>
          <span className="cart__total">TOTAL</span>
        </div>
        <section className="cart__body">
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </section>
        <div className="cart__subtotal">
          Total:{" "}
          {formatCurrency(
            cartItems.reduce((total, cartItem) => {
              const item = products.find(
                (item) => Number(item.id) === cartItem.id
              );
              if (item?.sale) {
                return total + (item?.sale || 0) * cartItem.quantity;
              } else {
                return total + (item?.price || 0) * cartItem.quantity;
              }
            }, 0)
          )}
        </div>
        <button className="cart__finish">
          <Paypal className="cart__paypal" />
          Paypal
        </button>
      </section>
      <ProductCards
        cardClass="card"
        cardQuantity={4}
        productsTitle="Featured collection"
      />
    </section>
  );
};
