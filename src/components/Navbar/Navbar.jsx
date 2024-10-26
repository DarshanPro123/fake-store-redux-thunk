import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
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
      </ul>
    </nav>
  );
};

export default Navbar;
