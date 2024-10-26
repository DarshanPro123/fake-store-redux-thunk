import React from "react";
import { NavLink } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  return (
    <nav className="bg-gray-800 h-16 flex justify-between items-center px-4">
      <div className="text-black uppercase text-lg font-bold">
        <h1 className="border border-black h-full flex items-center px-2">
          Fake{" "}
          <span className="text-blue-600">
            <b className="bg-blue-700 text-white px-1">Store</b>
          </span>
        </h1>
      </div>
      <ul className="flex items-center gap-10 h-full text-center list-none">
        <li>
          <NavLink
            exact
            to="/"
            className="text-xl active:underline text-blue-600 transition duration-300 hover:text-blue-800 hover:underline"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/mycards"
            className="text-xl text-blue-600 transition duration-300 hover:text-blue-800 hover:underline"
          >
            My Cards
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/userinfo"
            className="text-xl text-blue-600 transition duration-300 hover:text-blue-800 hover:underline"
          >
            User Info
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/cart"
            className=" relative text-xl text-gray-200 transition duration-300 hover:text-blue-800 hover:underline"
          >
            <span className="absolute top-[-12px] w-6 h-auto text-sm font-semibold bg-red-600 border rounded-full">
              {cartItems.length}
            </span>
            <BsCart4 />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
