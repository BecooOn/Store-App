import React from "react";
import { useNavigate } from "react-router-dom";
// import ScrollToTop from "./ScrollToTop";

const ProductCard = ({ product }) => {
  const { title, category, thumbnail, price, id } = product;
  const navigate = useNavigate();
  return (
    <>
      <div
        className="border-2 border-gray-200 rounded-xl cursor-pointer p-2"
        onClick={() => navigate(`${id}`)}
      >
        <div className="flex justify-center w-full rounded-md hover:opacity-75">
          <img
            src={thumbnail}
            alt={title}
            title={"title"}
            className="h-[250px] w-[250px] object-fit lg:w-full rounded-lg lg:rounded-lg"
          />
        </div>
        <div className="mt-4 mb-4 flex justify-between">
          <div className="flex-1">
            <h3 className="text-sm text-gray-700 line-clamp-1">{title}</h3>
            <p className="mt-1 text-sm text-gray-500 line-clamp-1">
              {category}
            </p>
          </div>
          <p className="flex items-center border-gray-600 rounded-full px-3 text-md font-medium text-gray-900 bg-orange-200">
            {price * 33} ₺
          </p>
        </div>
      </div>
      {/* <ScrollToTop /> */}
    </>
  );
};

export default ProductCard;
