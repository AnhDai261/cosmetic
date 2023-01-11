import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import ProductModal from "../component/ProductModal";
import moment from "moment";
const Order = () => {
  const [state, setstate] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/getAllOrder`)
      .then((res) => {
        if (res.data.data && res.data.data.length > 0) {
          let arr = [];
          res.data.data.forEach((item) => {
            arr.push({
              id: item.id,
              userId: item.userId,
              itemId: item.itemId,
              quantity: item.quantity,
              status: item.status,
              priceTotal: item.priceTotal,
              created: moment(item.createdAt).format("DD/MM/YYYY"),
            });

            return arr;
          });
          setstate(arr);
        }
      });
  }, []);
  return (
    <>
      <div>
        <div className="flex-1 pb-8">
          <div className="block lg:flex items-center justify-between py-7 px-10">
            <div>
              <h1 className="text-2xl font-semibold leading-relaxed text-gray-800">
                Order
              </h1>
              <p className="text-sm font-medium text-gray-500">
                Tất cả đơn đặt hàng được nằm ở đây
              </p>
            </div>
          </div>

          <table className="w-full border-b border-gray-200">
            <thead>
              <tr className="text-sm font-medium text-gray-700 border-b border-gray-200">
                <td className="py-4 px-4 text-center">Mã Hóa Đơn</td>
                <td className="py-4 px-4 text-center">Mã Khách Hàng</td>
                <td className="py-4 px-4 text-center">Mã Sản Phẩm</td>
                <td className="py-4 px-4 text-center">Tổng Tiền</td>
                <td className="py-4 px-4 text-center">Số Lượng</td>
                <td className="py-4 px-4 text-center">Trạng Thái</td>
                <td className="py-4 px-4 text-center">Ngày tạo</td>
                {/* <td className="py-4 px-4 text-center">Trạng Thái</td> */}
                {/* <td className="py-4 pr-10 pl-4 text-center">
                  <FilterIcon className="w-6 h-6 fill-current" />
                </td> */}
              </tr>
            </thead>
            {state === undefined && state ? (
              <div className="text-center text-red-500">
                Không Tìm Thấy Đơn Hàng
              </div>
            ) : (
              <>
                {state.map((item, index) => {
                  return (
                    <>
                      <tbody key={index}>
                        <tr
                          v-for="product in products"
                          className="hover:bg-gray-100 transition-colors group items-center"
                        >
                          <td className="text-center">{item.id}</td>
                          <td className="text-center">{item.userId}</td>
                          <td className="text-center">{item.itemId}</td>
                          <td className="text-center">
                            {item.priceTotal.toLocaleString()} vnđ
                          </td>
                          <td className="text-center">{item.quantity}</td>
                          <td>
                            <div className="flex gap-x-2 justify-center items-center">
                              <a
                                href="#"
                                v-for="icon in product.platformIcons"
                                className="p-2 bg-gray-200 rounded-md hover:bg-gray-300 uppercase"
                              >
                                {item.status}
                              </a>
                            </div>
                          </td>
                          <td className="text-center">{item.created}</td>
                          <td className="text-center">
                            <button className="p-2 hover:rounded-md hover:bg-gray-200">
                              Chi Tiết
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </>
                  );
                })}
              </>
            )}
          </table>
        </div>
      </div>
    </>
  );
};

export default Order;
