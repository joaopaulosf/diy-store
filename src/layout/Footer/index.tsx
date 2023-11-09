import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer-wrap">
      <section className="footer">
        <h1 className="footer__title">Quick links</h1>
        <div className="footer__links">
          <Link className="footer_link" to={"products"}>
            Our Products
          </Link>
          <Link className="footer_link" to={"/"}>
            Terms of Service
          </Link>
          <Link className="footer_link" to={"/"}>
            Refund policy
          </Link>
        </div>
        <section className="footer__contact">
          <h2 className="footer__subtitle">Subscribe to our emails</h2>
          <p className="footer__email">doityourself.contact@diy.com</p>
        </section>
      </section>
    </div>
  );
};
