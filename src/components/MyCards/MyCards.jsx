// MyCards.js
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../store/productSlice";
import Card from "../../components/Card/Card.jsx";

const MyCards = () => {
  const dispatch = useDispatch();
  const {
    items: products,
    status,
    error,
  } = useSelector((state) => state.products);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  return (
    <div className="p-2 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold mb-4 text-center">Our Products</h2>
      {status === "loading" && (
        <div
          className="
       w-full h-screen flex justify-center items-center
       "
        >
          {" "}
          <div
            class="w-28 h-28 rounded-full animate-spin
      border-2 border-dashed border-blue-600 border-t-transparent"
          >
            {" "}
            <img
              className=" w-24 h-24 bg-transparent "
              src="https://png.pngtree.com/png-vector/20240827/ourlarge/pngtree-a-man-thinking-3d-art-png-image_13557438.png"
              alt=""
            />
          </div>
        </div>
      )}
      {status === "failed" && <p>Error: {error}</p>}
      <div className="flex flex-wrap justify-center gap-6">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default MyCards;
