import React from "react";
import ButtonGoTop from "../component/ButtonGoTop";
import Cart from "../component/Cart";
import Footer from "../component/Footer";
import Header from "../component/Header";

const LayoutCart = () => {
  return (
    <div>
      <Header />
      <Cart />
      <Footer />
      <ButtonGoTop />
    </div>
  );
};

export default LayoutCart;
