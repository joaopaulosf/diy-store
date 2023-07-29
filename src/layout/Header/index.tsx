import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

import bgWoman from "/assets/images/woman-mobile.avif";

export const Header = () => {
  const { ref: myRef, inView: myElementIsVisible } = useInView();

  return (
    <section className="header">
      <img
        className="header__image"
        src={bgWoman}
        alt="background-woman"
        loading="lazy"
      />
      <section
        ref={myRef}
        className={`${"header__content"} ${
          myElementIsVisible ? "header__content-show" : ""
        }`}
      >
        <h1 ref={myRef} className="header__title">
          Do it <span className="header__span">Yourself</span> and save money!
        </h1>
        <p className="header__paragraph">
          A Company created to explore your Creativity
        </p>
        <button className="header__button">
          <Link className="header__link" to={"/products"}>
            Shop all
          </Link>
        </button>
      </section>
    </section>
  );
};
