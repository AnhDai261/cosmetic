import React from "react";
import ButtonGoTop from "../component/ButtonGoTop";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Store from "../component/Store";

const LayoutStore = () => {
  return (
    <div>
      <Header />
      <Store />
      <Footer />
      <ButtonGoTop />
    </div>
  );
};

export default LayoutStore;
