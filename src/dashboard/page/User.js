import axios from "axios";
import React, { useEffect, useState } from "react";
import moment from "moment";
const User = () => {
  const [state, setstate] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/getAllUser`)
      .then((res) => {
        console.log("check uer", res);
        if (res.data.data && res.data.data.length > 0) {
          let arr = [];
          res.data.data.forEach((item) => {
            arr.push({
              id: item.id,
              email: item.email,
              fullName: item.fullName,
              phoneNumber: item.phoneNumber,
              address: item.address,
              roleId: item.role_id,
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
                Tất cả thông tin khách hàng - người quản lý của bạn ở đây
              </p>
            </div>
          </div>

          <table className="w-full border-b border-gray-200">
            <thead>
              <tr className="text-sm font-medium text-gray-700 border-b border-gray-200">
                <td className="py-4 px-4 text-center">Mã Khách Hàng</td>
                <td className="py-4 px-4 text-center">Email</td>
                <td className="py-4 px-4 text-center">Họ Và Tên</td>
                <td className="py-4 px-4 text-center">Số Điện Thoại</td>
                <td className="py-4 px-4 text-center">Địa Chỉ</td>
                <td className="py-4 px-4 text-center">Vai Trò</td>
                <td className="py-4 px-4 text-center">Ngày tạo</td>
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
                          <td className="text-center">{item.email}</td>
                          <td className="text-center">{item.fullName}</td>
                          <td className="text-center">{item.phoneNumber}</td>
                          <td className="text-center">{item.address}</td>
                          <td>
                            <div className="flex gap-x-2 justify-center items-center">
                              <a
                                href="#"
                                v-for="icon in product.platformIcons"
                                className="px-5 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
                              >
                                {item.roleId}
                              </a>
                            </div>
                          </td>
                          <td className="text-center">{item.created}</td>
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

export default User;
