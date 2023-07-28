import { useInView } from "react-intersection-observer";

export const About = () => {
  const { ref: myRef, inView: myElementIsVisible } = useInView();

  return (
    <section
      ref={myRef}
      className={`${"about"} ${myElementIsVisible ? "about-show" : ""}`}
    >
      <h1 className="about__title">About us</h1>
      <p className="about__paragraph about__paragraph--first">
        Welcome to our Do-It-Yourself Web Store! We are your go-to destination
        for all your DIY needs. Our carefully curated selection of high-quality
        products and resources is designed to inspire and support your creative
        endeavors.
      </p>
      <p className="about__paragraph">
        Whether you're a seasoned DIY pro or just starting out, we have
        everything you need to bring your ideas to life. Join our community of
        makers and embark on your next exciting project today!
      </p>
    </section>
  );
};
