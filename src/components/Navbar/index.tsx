import { Link } from "react-router-dom";
import { PiShoppingCartThin as Cart } from "react-icons/pi";

import { useNav } from "hooks/useNav";
import BrandIcon from "assets/images/brand.webp";
import { useShoppingCart } from "context/ShoppingCart";

export const Navbar = () => {
  const { menuIcon, closeMenu, dropdownMenu } = useNav();
  const { cartQuantity } = useShoppingCart();

  return (
    <>
      <nav className="nav">
        <div className="nav__menu">{menuIcon}</div>
        <Link to="/" onClick={closeMenu}>
          <img className="nav__image" src={BrandIcon} alt="brand-icon" />
        </Link>
        <ul className={`nav__links ${dropdownMenu}`}>
          <li className="nav__item">
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/products" onClick={closeMenu}>
              Buy now
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/auth" onClick={closeMenu}>
              Login
            </Link>
          </li>
        </ul>
        <div className="nav__cart">
          <Link to="/cart" className="cart" onClick={closeMenu}>
            <Cart className="cart__icon" title="cart" />
          </Link>
          {cartQuantity ? (
            <span className="cart__quantity">{cartQuantity}</span>
          ) : null}
        </div>
      </nav>
    </>
  );
};
