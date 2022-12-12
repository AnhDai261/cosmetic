import {
  GiEyelashes,
  GiLipstick,
  GiLiquidSoap,
  GiPerfumeBottle,
} from "react-icons/gi";

export const images = {
  logo: require("./logo.jpg"),
  background1: require("./Banners/background1.jpg"),
  background2: require("./Banners/background2.jpg"),
  background3: require("./Banners/background3.jpg"),
  banner01: require("./Banners/banner01.jpg"),
  banner02: require("./Banners/banner02.jpg"),
  banner03: require("./Banners/banner03.jpg"),
  banner04: require("./Banners/banner04.jpg"),
  banner05: require("./Banners/banner05.jpg"),
  topbanner: require("./Banners/topbanner.jpg"),
  middlebanner: require("./Banners/middlebanner.jpg"),

  product1: require("./Products/product1.jpg"),
  product2: require("./Products/product2.jpg"),
  product3: require("./Products/product3.jpg"),
  product4: require("./Products/product4.jpg"),
  product5: require("./Products/product5.jpg"),
  product6: require("./Products/product6.jpg"),
  product7: require("./Products/product7.jpg"),
  product8: require("./Products/product8.jpg"),
  product9: require("./Products/product9.jpg"),
  product10: require("./Products/product10.jpg"),
  product11: require("./Products/product11.jpg"),
  product12: require("./Products/product12.jpg"),
};

export const cards = [
  {
    image: images.product1,
    title: "Name 1",
    price: "20$",
  },
];

export const brandcards = [
  {
    icon: <GiLipstick />,
    title: "Son",
    buttonName: "Click Here",
  },
  {
    icon: <GiLiquidSoap />,
    title: "Nước Hoa",
    buttonName: "Click Here",
  },
  {
    icon: <GiEyelashes />,
    title: "Trang Điểm",
    buttonName: "Click Here",
  },
  {
    icon: <GiPerfumeBottle />,
    title: "Kem Dưỡng Thể",
    buttonName: "Click Here",
  },
];

export const carousel = [
  images.banner01,
  images.banner02,
  images.banner03,
  images.banner04,
  images.banner05,
];
