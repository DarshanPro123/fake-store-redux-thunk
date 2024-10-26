import React from "react";

const Card = ({ product }) => {
  return (
    <div
      key={product.id}
      className="w-full cursor-pointer sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2 border border-gray-900 bg-white rounded-lg shadow-md hover:shadow-lg transform transition duration-300 hover:scale-105"
    >
      <div className="flex flex-col h-full justify-between">
        <img
          className="h-52 w-full object-contain mb-4"
          src={product.image}
          alt={product.title}
        />
        <h3 className="text-md font-medium mb-2">{product.title}</h3>
        <p className="text-lg font-bold text-gray-700">
          ${Math.floor(product.price)}
        </p>
        <button className="mt-4 w-full bg-gray-200 text-black text-sm font-medium border border-gray-950 py-2 rounded-sm hover:bg-gray-300 transition duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
