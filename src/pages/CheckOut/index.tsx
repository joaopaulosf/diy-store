import { useState } from "react";

import { CreditCard } from "components/CreditCard";
import { PopUp } from "components/PopUp";

export function CheckOut() {
  const [status, setStatus] = useState<number>(0);

  const radioHandler = (status: number) => {
    setStatus(status);
  };

  const handleClick = () => {
    const popup = document.getElementById("popup");

    popup?.classList.add("popup__open");
  };

  return (
    <div className="checkout" id="checkout">
      <section className="checkout__content">
        <div className="checkout__delivery">
          <h1 className="delivery__title">Delivery</h1>
          <input
            className="checkout__input checkout__input--first"
            type="text"
            placeholder="First name (optional)"
          />
          <input
            className="checkout__input checkout__input--last"
            type="text"
            placeholder="Last name"
          />
          <input
            className="checkout__input checkout__input--company"
            type="text"
            placeholder="Company (optional)"
          />
          <input
            className="checkout__input checkout__input--adress"
            type="text"
            placeholder="Adress"
          />
          <input
            className="checkout__input checkout__input--apartment"
            type="text"
            placeholder="Apartment, suite, etc."
          />
          <input
            className="checkout__input checkout__input--city"
            type="text"
            placeholder="City"
          />
          <input
            className="checkout__input checkout__input--county"
            type="text"
            placeholder="County"
          />
          <input
            className="checkout__input checkout__input--postal"
            type="text"
            placeholder="Postal code"
          />
          <input
            className="checkout__input checkout__input--phone"
            type="text"
            placeholder="Phone"
          />
        </div>
        <div className="checkout__payment">
          <h1 className="payment__title">Payment</h1>
          <span className="payment__text">
            All transactions are secure and encrypted.
          </span>
          <section className="checkout__method">
            <label className="checkout__label">
              <input
                className=""
                type="radio"
                name="radAnswer"
                onClick={() => radioHandler(0)}
                checked={status === 0}
              />
              Credit Card
            </label>
            <label className="checkout__label">
              <input
                type="radio"
                name="radAnswer"
                onClick={() => radioHandler(1)}
              />
              Paypal
            </label>
            {status === 0 ? (
              <CreditCard />
            ) : (
              <section
                className="checkout__finish"
                onClick={() => handleClick()}
              >
                Finish
              </section>
            )}
          </section>
        </div>
      </section>
      <PopUp
        imgUrl="/assets/images/check.png"
        title="Thank You!"
        message="purchase successfully paid"
      />
    </div>
  );
}
