import { useNavigate } from "react-router-dom";

import { PopUpProps } from "models";
import { useShoppingCart } from "hooks/useShoppingCart";

export function PopUp({ imgUrl, title, message }: PopUpProps) {
  const navigate = useNavigate();
  const { removeAllCart } = useShoppingCart();
  const closePopUp = () => {
    const popup = document.getElementById("popup");

    popup?.classList.remove("popup__open");
    removeAllCart();
    navigate("/");
  };

  return (
    <section className="popup" id="popup">
      <img className="popup__image" src={imgUrl} alt="popup-image" />
      <h1 className="popup__title">{title}</h1>
      <p className="popup__message">{message}</p>
      <button className="popup__btn" onClick={() => closePopUp()}>
        OK
      </button>
    </section>
  );
}
