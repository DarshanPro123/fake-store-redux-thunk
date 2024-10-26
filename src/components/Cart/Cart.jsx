// Cart.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../../store/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <h2 className="text-5xl text-blue-700 font-semibold mb-6 text-center">
        Your Cart 🛒
      </h2>
      {cartItems.length === 0 ? (
        <p className="w-full text-center h-screen border border-gray-950 p-1 text-6xl font-semibold font-serif flex justify-center items-center">
          Your cart is empty ‼
        </p>
      ) : (
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center border-b pb-4"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h3 className="text-lg font-medium">{item.title}</h3>
                    <p className="text-sm text-gray-600">
                      Quantity: {item.quantity} x ${item.price}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-8 text-right">
            <button
              onClick={handleClearCart}
              className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition duration-300"
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
