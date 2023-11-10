import {
  RiMastercardFill as MasterCard,
  RiVisaLine as Visa,
} from "react-icons/ri";
import { Link } from "react-router-dom";

export function CreditCard() {
  return (
    <div className="checkout__payment">
      <span className="creditcard">
        <MasterCard className="creditcard__flag" />
        <Visa className="creditcard__flag" />
      </span>
      <input
        className="checkout__input"
        type="text"
        placeholder="Card number"
      />
      <input
        className="checkout__input"
        type="text"
        placeholder="Expiration date (MM/YY)"
      />
      <input
        className="checkout__input"
        type="text"
        placeholder="Security code"
      />
      <input
        className="checkout__input"
        type="text"
        placeholder="Name on card"
      />
      <Link
        to={"/"}
        className="checkout__finish"
        onClick={() => localStorage.clear()}
      >
        Finish
      </Link>
    </div>
  );
}
