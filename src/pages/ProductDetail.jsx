import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
const ProductDetail = () => {
  const [detail, setDetail] = useState({});
  const { thumbnail, title, description, category, price, images } = detail;

  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const getDetail = async () => {
      try {
        const res = await axios(`https://dummyjson.com/products/${id}`);
        setDetail(res.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    getDetail();
  }, [id]);

  //? Küçük arasında dolaşıp, tıklanan fotoğrafın ana fotoğraf olabilmesi için
  const changeMainImage = (item) => {
    setDetail((prev) => ({ ...prev, thumbnail: item }));
  };

  return (
    <div className="mx-auto max-w-2xl px-4 pt-8 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div className="mt-6 w-full ">
        <article className="mx-auto w-full block lg:flex mt-4 h-full 2xl:h-[70vh]  shadow-lg border rounded-md duration-300 hover:shadow-sm">
          <div className="grid grid-rows-4 gap-2 h-full w-full lg:w-7/12 p-4">
            <div className="w-full row-span-2 md:row-span-3">
              <img
                className="h-full w-full rounded-lg"
                src={thumbnail}
                alt=""
              />
            </div>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4 row-span-2 md:row-span-1">
              {images?.slice(0, 6).map((item, i) => (
                <div key={i}>
                  <img
                    className="h-[15vh] w-full rounded-lg cursor-pointer"
                    src={item}
                    alt=""
                    onClick={() => changeMainImage(item)}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-5/12 flex flex-col justify-evenly p-4">
            <div className="pt-3 ml-4 mr-2 mb-3">
              <h3 className="text-xl text-gray-900">{title}</h3>
              <p className="text-gray-400 mt-1">{description}</p>
            </div>
            <div className="flex  mt-2 pt-3 ml-4 mr-2">
              <div className="">
                <span className="block text-gray-900">
                  Category :{category}{" "}
                </span>
                <span className="block text-lg font-bold">Price : {price * 33} ₺</span>
              </div>
            </div>
            <div className="flex justify-center gap-3 mt-12">
              <button
                onClick={() => navigate(-1)}
                className="border rounded-lg bg-labelColor text-white p-2"
              >
                Go back
              </button>
              <button
                onClick={() => navigate("/dashboard")}
                className="border rounded-lg bg-main text-white p-2"
              >
                Home
              </button>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ProductDetail;
