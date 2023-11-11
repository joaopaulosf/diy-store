import {
  RiMastercardFill as MasterCard,
  RiVisaLine as Visa,
} from "react-icons/ri";

export function CreditCard() {
  const handleClick = () => {
    const popup = document.getElementById("popup");

    popup?.classList.add("popup__open");
  };

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
      <section className="checkout__finish" onClick={() => handleClick()}>
        Finish
      </section>
    </div>
  );
}
