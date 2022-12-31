import React, { useState } from "react";
import ButtonGoTop from "../component/ButtonGoTop";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Store from "../component/Store";

const LayoutStore = () => {
  let [render, setRender] = useState(0);

  const hadleRender = () => {
    console.log("check ++");

    setRender(Math.random());
  };

  return (
    <div>
      <Header />
      <Store handleRender={() => hadleRender()} />
      <Footer />
      <ButtonGoTop />
    </div>
  );
};

export default LayoutStore;
