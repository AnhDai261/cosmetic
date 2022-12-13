import React from "react";
import ButtonGoTop from "../component/ButtonGoTop";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Index from "./index";

const LayoutAuth = () => {
  return (
    <div>
      <Header />
      <Index />
      <Footer />
      <ButtonGoTop />
    </div>
  );
};

export default LayoutAuth;
