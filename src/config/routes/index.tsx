import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navbar } from "components/Navbar";
import { Footer } from "layout/Footer";
import { Auth } from "pages/Auth";
import { Cart } from "pages/Cart";
import { ErrorPage } from "pages/Error";
import { Home } from "pages/Home";
import { Products } from "pages/Products";
import { SingleProduct } from "pages/SingleProduct";
import { ShoppingCartProvider } from "context/ShoppingCart";

export const AppRoutes = () => {
  return (
    <ShoppingCartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:productId" element={<SingleProduct />} />
          <Route path="auth" element={<Auth />} />
          <Route path="auth/:pageId" element={<SingleProduct />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </ShoppingCartProvider>
  );
};
