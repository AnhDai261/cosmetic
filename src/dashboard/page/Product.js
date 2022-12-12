import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import ProductModal from "../component/ProductModal";
const Product = () => {
  const [showModal, setShowModal] = useState(false);

  const [product, setProduct] = useState([]);

  const [update, setUpdate] = useState(null);

  const closeModal = () => {
    setUpdate(null);
    setShowModal(false);
  };

  const toggleModal = () => {
    axios.get("http://localhost:6969/api/getAllItem").then((res) => {
      let data = res.data.data;
      setProduct(data);
      setUpdate(null);
    });

    setShowModal(!showModal);
  };

  useEffect(() => {
    axios.get("http://localhost:6969/api/getAllItem").then((res) => {
      let data = res.data.data;
      setProduct(data);
    });
  }, []);
  const handleUpdate = (id) => {
    axios.get(`http://localhost:6969/api/getOneItem?id=${id}`).then((res) => {
      if (res.data.errCode === 0) {
        setUpdate(res.data.data);
        setShowModal(true);
      } else {
        toast.error(res.data.errMessage);
      }
    });
  };

  const handleDelete = async (id) => {
    axios
      .delete(`http://localhost:6969/api/deleteItem?id=${id}`)
      .then((res) => {
        console.log("tra ve: ", res);
        let xoa = res.data;
        if (xoa.errCode === 0) {
          toast.success(xoa.errMessage);
          axios.get("http://localhost:6969/api/getAllItem").then((res) => {
            let data = res.data.data;
            setProduct(data);
          });
        } else {
          toast.error(xoa.errMessage);
        }
        //   let data = res.data.data;
      });
  };

  return (
    <>
      <>
        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div>
                    <p>
                      {update === null ? "Them san pham" : "Chinh sua san pham"}
                    </p>
                    <button
                      onClick={() => closeModal()}
                      className="bg-blue-700 w-20 px-3 py-2 mt-4 mr-5 text-white float-right rounded-lg"
                    >
                      X
                    </button>
                  </div>
                  <ProductModal
                    data={update}
                    toggleModal={() => toggleModal()}
                  />
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </>
      <div>
        <div class="flex-1 pb-8">
          <div class="block lg:flex items-center justify-between py-7 px-10">
            <div>
              <h1 class="text-2xl font-semibold leading-relaxed text-gray-800">
                Products
              </h1>
              <p class="text-sm font-medium text-gray-500">
                Hãy phát triển doanh nghiệp của bạn! Tạo sản phẩm của bạn và tải
                lên ở đây
              </p>
            </div>
            <button
              onClick={() => setShowModal(true)}
              class="inline-flex gap-x-2 items-center my-3 py-2.5 px-6 text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1"
            >
              <span class="text-sm font-semibold tracking-wide">
                Create Item
              </span>
            </button>
          </div>

          <table class="w-full border-b border-gray-200">
            <thead>
              <tr class="text-sm font-medium text-gray-700 border-b border-gray-200">
                <td class="pl-10">
                  <div class="flex items-center gap-x-4">
                    <input
                      type="checkbox"
                      class="w-6 h-6 text-indigo-600 rounded-md border-gray-300"
                      indeterminate="indeterminate"
                    />
                    <span>Tên Sản Phẩm</span>
                  </div>
                </td>
                <td class="py-4 px-4 text-center">Giá</td>
                <td class="py-4 px-4 text-center">Số Lượng</td>
                <td class="py-4 px-4 text-center">Danh Mục</td>
                <td class="py-4 px-4 text-center">Thương Hiệu</td>
                <td class="py-4 px-4 text-center">Trạng Thái</td>
                <td class="py-4 pr-10 pl-4 text-center">
                  {/* <FilterIcon class="w-6 h-6 fill-current" /> */}
                </td>
              </tr>
            </thead>
            {product.map((item, index) => {
              return (
                <>
                  <tbody key={index}>
                    <tr
                      v-for="product in products"
                      class="hover:bg-gray-100 transition-colors group"
                    >
                      <td class="flex gap-x-4 items-center py-4 pl-10">
                        <input
                          type="checkbox"
                          class="w-6 h-6 text-indigo-600 rounded-md border-gray-300"
                        />
                        <img
                          src={item.image}
                          alt=""
                          class="w-40 aspect-[3/2] rounded-lg object-cover object-top border border-gray-200"
                        />
                        <div>
                          <a
                            href="#"
                            class="text-lg font-semibold text-gray-700"
                          >
                            {item.name}
                          </a>
                          <div class="overflow-hidden w-80 h-20 font-medium text-gray-400">
                            {item.describe}
                          </div>
                        </div>
                      </td>
                      <td class="font-medium text-center">
                        {item.price.toLocaleString()} vnđ
                      </td>
                      <td class="font-medium text-center">{item.amount}</td>
                      <td class="text-center">
                        <span class="font-medium">{item.Categorie.name}</span>
                      </td>
                      <td class="text-center">
                        <span class="font-medium">{item.Brand.name}</span>
                      </td>
                      <td>
                        <div class="flex gap-x-2 justify-center items-center">
                          <a
                            href="#"
                            v-for="icon in product.platformIcons"
                            class="p-2 bg-gray-200 rounded-md hover:bg-gray-300"
                          >
                            {item.status}
                          </a>
                        </div>
                      </td>
                      <td>
                        <span class="inline-block w-20 group-hover:hidden">
                          Tác Vụ
                        </span>
                        <div class="hidden group-hover:flex group-hover:w-20 group-hover:items-center group-hover:text-gray-500 group-hover:gap-x-2">
                          <button
                            onClick={() => handleUpdate(item.id)}
                            class="p-2 hover:rounded-md hover:bg-gray-200"
                          >
                            Chỉnh Sửa
                          </button>
                          <button
                            onClick={() => handleDelete(item.id)}
                            class="p-2 hover:rounded-md hover:bg-gray-200"
                          >
                            Xóa
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </>
              );
            })}
          </table>
        </div>
      </div>
    </>
  );
};

export default Product;
