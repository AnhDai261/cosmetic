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
  background4: require("./Banners/background4.jpg"),
  background5: require("./Banners/background5.jpg"),

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
  { id: "1", image: images.product1, title: "Name 1", price: "200000" },
  { id: "2", image: images.product2, title: "Name 2", price: "300000" },
  { id: "3", image: images.product3, title: "Name 3", price: "400000" },
  { id: "4", image: images.product4, title: "Name 4", price: "500000" },
  { id: "5", image: images.product5, title: "Name 5", price: "600000" },
  { id: "6", image: images.product6, title: "Name 6", price: "700000" },
  { id: "7", image: images.product7, title: "Name 7", price: "800000" },
  { id: "8", image: images.product8, title: "Name 8", price: "900000" },
  { id: "9", image: images.product9, title: "Name 9", price: "200000" },
  { id: "10", image: images.product10, title: "Name 10", price: "300000" },
  { id: "11", image: images.product11, title: "Name 11", price: "500000" },
  { id: "12", image: images.product12, title: "Name 12", price: "700000" },
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
export const botcarousel = [
  { index: "1", image: images.product1, title: "Name 1" },
  { index: "2", image: images.product2, title: "Name 2" },
  { index: "3", image: images.product3, title: "Name 3" },
  { index: "4", image: images.product4, title: "Name 4" },
  { index: "5", image: images.product5, title: "Name 5" },
  { index: "6", image: images.product6, title: "Name 6" },
  { index: "7", image: images.product7, title: "Name 7" },
  { index: "8", image: images.product8, title: "Name 8" },
  { index: "9", image: images.product9, title: "Name 9" },
  { index: "10", image: images.product10, title: "Name 10" },
  { index: "11", image: images.product11, title: "Name 11" },
  { index: "12", image: images.product12, title: "Name 12" },
  { index: "13", image: images.product1, title: "Name 1" },
  { index: "14", image: images.product2, title: "Name 2" },
  { index: "15", image: images.product3, title: "Name 3" },
];
