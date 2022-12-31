import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { images } from "../data/data";

const CheckOut = () => {
  const navigate = useNavigate();
  const [total, setTotal] = useState("");
  const [state, setState] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    note: "",
  });
  const countries = [
    "Việt Nam",
    "Mỹ",
    "Trung Quốc",
    "Campuchia",
    "Lào",
    "Thái Lan",
  ];

  const [product, setProduct] = useState([]);
  const [price, setPrice] = useState([]);
  const [deleteState, setDeleteState] = useState([]);

  useEffect(() => {
    let res = getDataStore();
    if (res && res.length > 0) {
      handleTotalPrice(res);
      setProduct(res);
      checkDelete(res);
    }
  }, []);

  const getDataStore = () => {
    let getData = JSON.parse(localStorage.getItem("product"));
    if (getData) {
      return getData;
    }
  };

  const handleTotalPrice = (data) => {
    let arr = [];
    data.forEach((item) => {
      arr.push(item.price);

      return arr;
    });
    if (arr && arr.length > 0) {
      let total = arr.reduce((bienNho, thangHienTai) => {
        return bienNho + thangHienTai;
      });
      setPrice(total);
    }
  };
  const checkDelete = (daily) => {
    setDeleteState(daily);
  };
  const handleDelete = (del) => {
    deleteState.forEach((item) => {
      if (del === item.id) {
        localStorage.removeItem("product", [item]);
        // console.log("cehcheche===+++++", item);
      }
    });
  };

  const handleOnchange = (e, id) => {
    let copyState = { ...state };

    copyState[id] = e.target.value;

    setState(copyState);
  };

  const handlePay = () => {
    if (
      state.fullName === "" ||
      state.address === "" ||
      state.phoneNumber === ""
    ) {
      toast.error("Bạn chưa nhập đủ thông tin");
    } else {
      toast.success("Đặt hàng thành công");
      localStorage.removeItem("product");
      setTimeout(() => {
        navigate("/store");
      }, 1000);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="py-16 px-4 md:px-6 2xl:px-0 flex justify-center items-center 2xl:mx-auto 2xl:container">
        <div className="flex flex-col justify-start items-start w-full space-y-9">
          {/* button  */}
          <div className="flex flex-col xl:flex-row justify-center xl:justify-between space-y-6 xl:space-y-0 xl:space-x-6 w-full">
            <div className="xl:w-3/5 flex flex-col sm:flex-row xl:flex-col justify-center items-center bg-gray-100 py-7 sm:py-0 xl:py-10 px-10 w-full">
              {/* <div className="flex flex-col justify-start items-start w-full space-y-4">
                <p className="text-xl md:text-2xl leading-normal text-gray-800">
                  Logitech K251
                </p>
                <p className="text-base font-semibold leading-none text-gray-600">
                  $520.00
                </p>
              </div>
              <div className="mt-6 sm:mt-0 xl:my-10 xl:px-20 w-52 sm:w-96 xl:w-auto">
                <img src={images.logo} alt="headphones" />
              </div> */}
              <div className="mt-8">
                <div className="flow-root">
                  <ul role="list" className="-my-6 divide-y divide-gray-200">
                    {product.map((product, index) => (
                      <li key={index} className="flex py-6">
                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                          <img
                            src={product.image}
                            alt="abc"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>

                        <div className="ml-4 flex flex-1 flex-col">
                          <div>
                            <div className="flex justify-between text-base font-medium text-gray-900">
                              <h3 className="pr-2">{product.name}</h3>
                              <p>{product.price.toLocaleString()} vnđ</p>
                            </div>
                            <p className="mt-1 text-sm text-gray-500">
                              {product.brandName}
                            </p>
                          </div>
                          <div className="flex flex-1 items-end justify-between text-sm">
                            <p className="text-gray-500">{product.cateName}</p>

                            <div className="flex">
                              <button
                                type="button"
                                onClick={() => handleDelete(product.id)}
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-8 bg-gray-100 flex flex-col lg:w-full xl:w-3/5">
              <button className="border border-transparent hover:border-gray-300 bg-gray-900 hover:bg-white text-white hover:text-gray-900 flex flex-row justify-center items-center space-x-2 py-4 rounded w-full">
                <div>
                  <svg
                    className="fill-current"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.9099 4.27692C9.6499 4.27692 9.1174 4.87817 8.2399 4.87817C7.34021 4.87817 6.65396 4.28129 5.56208 4.28129C4.49333 4.28129 3.35365 4.93379 2.6299 6.04535C1.61365 7.61285 1.78615 10.565 3.43208 13.08C4.02083 13.9804 4.80708 14.99 5.83833 15.001H5.85708C6.75333 15.001 7.01958 14.4141 8.25302 14.4072H8.27177C9.48677 14.4072 9.73052 14.9975 10.623 14.9975H10.6418C11.673 14.9866 12.5015 13.8679 13.0902 12.971C13.514 12.326 13.6715 12.0022 13.9965 11.2725C11.6155 10.3688 11.233 6.99348 13.5877 5.69942C12.869 4.79942 11.859 4.27817 10.9068 4.27817L10.9099 4.27692Z"
                      fill="currentColor"
                    />
                    <path
                      d="M10.6338 1C9.88379 1.05094 9.00879 1.52844 8.49629 2.15188C8.03129 2.71688 7.64879 3.555 7.79879 4.36781H7.85879C8.65754 4.36781 9.47504 3.88688 9.95254 3.27063C10.4125 2.68406 10.7613 1.85281 10.6338 1V1Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-base leading-4">Pay</p>
                </div>
              </button>

              <div className="flex flex-row justify-center items-center mt-6">
                <hr className="border w-full" />
                <p className="flex flex-shrink-0 px-4 text-base leading-4 text-gray-600">
                  Hoặc thành toán khi nhận hàng
                </p>
                <hr className="border w-full" />
              </div>

              <div className="mt-8">
                <input
                  onChange={(e) => handleOnchange(e, "fullName")}
                  className="border border-gray-300 p-4 rounded w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                  type="text"
                  placeholder="Họ và Tên"
                />
              </div>

              <label className="mt-8 text-base leading-4 text-gray-800">
                Địa chỉ
              </label>
              <div className="mt-2 flex-col">
                <div>
                  <input
                    onChange={(e) => handleOnchange(e, "address")}
                    className="border rounded-tl rounded-tr border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                    type="text"
                    placeholder="Địa chỉ"
                  />
                </div>
                {/* <div className="flex-row flex">
                  <input
                    className="border rounded-bl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                    type="text"
                    placeholder="Phường/Huyện"
                  />
                  <input
                    className="border rounded-br border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                    type="text"
                    placeholder="Tỉnh/Thành Phố"
                  />
                </div> */}
              </div>

              <label className="mt-8 text-base leading-4 text-gray-800">
                Số điện thoại
              </label>
              <div className="mt-2 flex-col">
                <div>
                  <input
                    onChange={(e) => handleOnchange(e, "phoneNumber")}
                    className="border rounded border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                    type="email"
                    placeholder="Số điện thoại"
                  />
                </div>
              </div>

              <label className="mt-8 text-base leading-4 text-gray-800">
                Ghi chú
              </label>
              <div className="mt-2 flex-col">
                <input
                  onChange={(e) => handleOnchange(e, "note")}
                  className="border rounded-bl rounded-br border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                  type="text"
                  placeholder="Ghi chú"
                />
              </div>

              <button
                onClick={() => handlePay()}
                className="mt-8 border border-transparent hover:border-gray-300 bg-gray-900 hover:bg-white text-white hover:text-gray-900 flex justify-center items-center py-4 rounded w-full"
              >
                <div>
                  <p className="text-base leading-4">Đặt hàng - {price} vnđ</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
