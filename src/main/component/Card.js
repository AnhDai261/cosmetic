import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
// import { cards } from "../data/data";
import ProductDetail from "./ProductDetails";

const Card = () => {
  const [product, setProduct] = useState([]);
  const [open, setOpen] = useState(false);
  const [checkLog, setCheckLog] = useState(null);

  console.log("check open: ", product);

  useEffect(() => {
    axios.get("http://localhost:6969/api/getAllItem").then((res) => {
      let data = res.data.data;
      setProduct(data);
    });
  }, []);

  const toggleDetail = () => {
    axios.get("http://localhost:6969/api/getAllItem").then((res) => {
      let data = res.data.data;
      setProduct(data);
      setCheckLog(null);
    });

    setOpen(!open);
  };

  const handleDetail = (id) => {
    axios.get(`http://localhost:6969/api/getOneItem?id=${id}`).then((res) => {
      if (res.data.errCode === 0) {
        setCheckLog(res.data.data);
        setOpen(true);
      } else {
        toast.error(res.data.errMessage);
      }
    });
  };
  return (
    <div>
      {open ? (
        <>
          <ProductDetail
            open={open}
            data={checkLog}
            toggleDetail={() => toggleDetail()}
          />
        </>
      ) : null}
      <div className="flex flex-wrap items-center justify-center gap-4 container mx-auto px-0">
        {product.map((item, index) => {
          return (
            <div
              key={index}
              class=" max-w-[18rem] bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
            >
              <div class="flex flex-col items-center pb-10">
                <img
                  class="w-400 h-72 aspect-[3/2] rounded-lg object-cover object-top border border-gray-200"
                  src={item.image}
                />
                <h5 class="capitalize mb-2 mt-4 lg:mb-6 lg:mt-6 text-xl font-medium text-gray-900 dark:text-white">
                  {item.name}
                </h5>
                <span class="text-sm text-gray-500 dark:text-gray-400">
                  {item.price.toLocaleString()} vnđ
                </span>
                <div class="flex mt-4 space-x-3 md:mt-6">
                  <button
                    onClick={() => handleDetail(item.id)}
                    class="capitalize inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                  >
                    Chi tiết
                  </button>
                  <button class="capitalize inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <Link to="/checkout">Mua Ngay</Link>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
