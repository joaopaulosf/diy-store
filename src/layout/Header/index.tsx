import bgWoman from "/assets/images/woman-mobile.avif";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <section className="header">
      <img className="header__image" src={bgWoman} alt="background-woman" />
      <section className="header__content">
        <h1 className="header__title">
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
