import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import CommonUtils from "../../utils/CommonUtils";

const ProductModal = ({ toggleModal, data }) => {
  let [categorySelect, setCategorySelect] = useState(1);

  //var function getTotal() es5
  //es6 let const = () =>
  //let pham vi trong 1 khoi
  //const tuong tu let nhung no khong the gan lai duoc

  let [state, setState] = useState({
    name: "",
    price: "",
    cateId: "",
    brandId: "",
    soluong: "",
    mota: "",
    photo: "",
    trangthai: false,
  });
  //scope
  let [categoryParent, setCategoryParent] = useState([]);
  let [categoryChildren, setCategoryChildren] = useState([]);
  let [brand, setBrand] = useState([]);

  useEffect(() => {
    if (data !== null) {
      setState({
        id: data.id,
        name: data.name,
        price: data.price,
        cateId: data.cateId,
        brandId: data.brandId,
        soluong: data.amount,
        mota: data.describe,
        photo: data.image,
        trangthai: data.status,
      });
    } else {
      setState({
        name: "",
        price: "",
        cateId: "",
        brandId: "",
        soluong: "",
        mota: "",
        photo: "",
        trangthai: "true",
      });
    }
  }, []);

  useEffect(() => {
    //Call api
    const fetchApi = async () => {
      let res = await axios
        .get(`http://localhost:6969/api/getallcategorie`)
        .then((res) => {
          return res;
        });
      let Categorie = res.data.data;
      // console.log("coi api: ", Categorie);
      if (Categorie && Categorie.length > 0) {
        let result = Categorie.filter((item) => {
          return item.is_parent === 1;
        });
        let resultChildren = Categorie.filter((item) => {
          return item.is_parent === 0;
        });

        setCategoryParent(result);
        setCategorySelect(result[1].id);
        setCategoryChildren(resultChildren);
      }
    };

    fetchApi();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    setTimeout(() => {
      axios.post(`http://localhost:6969/api/addItem`, { state }).then((res) => {
        if (res.data.errCode === 0) {
          toast.success(res.data.errMessage);
          toggleModal();
          return res;
        } else {
          toast.error(res.data.errMessage);
        }
      });
    }, 1000);
  };
  const handleUpdate = (e) => {
    e.preventDefault();

    setTimeout(() => {
      axios.put(`http://localhost:6969/api/editItem`, { state }).then((res) => {
        if (res.data.errCode === 0) {
          toast.success(res.data.errMessage);

          // console.log("Checek: ");
          toggleModal();
          return res;
        } else {
          toast.error(res.data.errMessage);
        }
      });
    }, 1000);
  };
  const handleOnchangePhoto = async (e) => {
    let data = e.target.files;
    let files = data[0];
    if (files) {
      let base64 = await CommonUtils.getBase64(files);
      setState({
        ...state,
        photo: base64,
      });
    }
  };

  const handleOnchange = (e, id) => {
    let copyState = { ...state };

    copyState[id] = e.target.value;

    console.log("copy state:  ", copyState);
    setState(copyState);
  };

  useEffect(() => {
    axios.get("http://localhost:6969/api/getAllBrand").then((res) => {
      // console.log("Check data brand: ", res);
      let data = res.data.data;
      setBrand(data);
    });
  }, []);

  return (
    <>
      <div className="mt-14 ml-4 sm:mt-2 sm:ml-6 bg-white">
        <form action="#">
          <div className="overflow-hidden shadow sm:rounded-md">
            <div className="bg-white px-4 py-5 sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                {/* Tên sản phẩm  */}

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Tên sản phẩm
                  </label>
                  <input
                    type="text"
                    name="first-name"
                    value={state.name}
                    onChange={(e) => handleOnchange(e, "name")}
                    id="first-name"
                    autoComplete="given-name"
                    className="mt-1 h-8 border-1 block w-full rounded-md border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                {/* Giá sản phẩm  */}

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Giá sản phẩm
                  </label>
                  <input
                    type="text"
                    name="last-name"
                    value={state.price}
                    onChange={(e) => handleOnchange(e, "price")}
                    id="last-name"
                    autoComplete="family-name"
                    className="mt-1 h-8 border-1 block w-full rounded-md border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                {/* IMAGE */}

                <div className="col-span-6 sm:col-span-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Photo
                    </label>
                    <div className="mt-1 flex items-center">
                      <span className="inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                        {state.photo ? (
                          <img src={state.photo} />
                        ) : (
                          <svg
                            className="h-full w-full text-gray-300"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                        )}
                      </span>
                      <button
                        type="button"
                        className="ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        Change
                      </button>
                    </div>
                  </div>
                  <label className="block text-sm font-medium text-gray-700">
                    Cover photo
                  </label>
                  <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                    <div className="space-y-1 text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            onChange={(e) => handleOnchangePhoto(e)}
                            type="file"
                            className="sr-only"
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quốc Gia */}

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Danh Mục
                  </label>
                  <select
                    id="country"
                    onChange={(e) => handleOnchange(e, "cateId")}
                    value={state.cateId}
                    name="country"
                    autoComplete="country-name"
                    className="mt-1 uppercase block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  >
                    {categoryParent && categoryParent.length > 0 ? (
                      categoryParent.map((item, index) => {
                        return (
                          <option
                            key={index}
                            value={item.id}
                            className="uppercase"
                          >
                            {item.name}
                          </option>
                        );
                      })
                    ) : (
                      <></>
                    )}
                  </select>

                  <label
                    htmlFor="brand"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Thương Hiệu
                  </label>
                  <select
                    id="brand"
                    name="brand"
                    value={state.brandId}
                    onChange={(e) => handleOnchange(e, "brandId")}
                    autoComplete="brand-name"
                    className="mt-1 uppercase block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  >
                    {brand && brand.length > 0 ? (
                      brand.map((item, index) => {
                        let arr = [];
                        if (item) {
                          arr.push(
                            <option
                              key={index}
                              value={item.id}
                              className="uppercase"
                            >
                              {item.name}
                            </option>
                          );
                        }
                        return arr.map((item, index) => {
                          return item;
                        });
                      })
                    ) : (
                      <>
                        <option>Loading</option>
                      </>
                    )}
                  </select>
                </div>
                {/* <div className="col-span-6 sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Quốc Gia
                  </label>
                  <Countryelector className="col-span-6 sm:col-span-3" />
                </div> */}

                {/* Hãng sản xuất */}

                {/* <div className="col-span-6 sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Hãng
                  </label>
                  <Countryelector className="col-span-6 sm:col-span-3" />
                </div> */}

                {/* Mô tả  */}

                <div className="col-span-6">
                  <label
                    htmlFor="street-address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Mô tả
                  </label>
                  <input
                    type="text"
                    value={state.mota}
                    onChange={(e) => handleOnchange(e, "mota")}
                    name="street-address"
                    id="street-address"
                    autoComplete="street-address"
                    className="mt-1 block w-full h-8 border-1 rounded-md border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                {/* Số Lượng  */}

                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label
                    htmlFor="region"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Số Lượng
                  </label>
                  <input
                    type="text"
                    name="region"
                    value={state.soluong}
                    onChange={(e) => handleOnchange(e, "soluong")}
                    id="region"
                    autoComplete="address-level1"
                    className="mt-1 block h-8 border-1 w-full rounded-md border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                {/* Trạng thái  */}

                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label
                    htmlFor="postal-code"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Trạng thái
                  </label>
                  <input
                    type="text"
                    name="postal-code"
                    value={state.trangthai}
                    onChange={(e) => handleOnchange(e, "trangthai")}
                    id="postal-code"
                    autoComplete="postal-code"
                    className="mt-1 h-8 border-1 block w-full rounded-md border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Save  */}

            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
              {data === null ? (
                <button
                  type="submit"
                  onClick={(e) => handleSubmit(e)}
                  className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Save
                </button>
              ) : (
                <button
                  type="submit"
                  onClick={(e) => handleUpdate(e)}
                  className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  ReSave
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProductModal;
