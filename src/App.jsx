import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  NavLink,
} from "react-router-dom";
import MyCards from "../src/components/MyCards/MyCards.jsx";
import myimg from "../src/assets/love-happy.gif";
import Userinfo from "./components/Userinfo.jsx";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div>
        <nav className="bg-gray-200 h-16 flex justify-between items-center px-4">
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
                activeClassName="text-blue-800 underline translate-x-10"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/mycards"
                className="text-xl text-blue-600 transition duration-300 hover:text-blue-800 hover:underline"
                activeClassName="text-blue-800 underline translate-x-10"
              >
                My Cards
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/userinfo"
                className="text-xl text-blue-600 transition duration-300 hover:text-blue-800 hover:underline"
                activeClassName="text-blue-800 underline translate-x-10"
              >
                User Info
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="dev bg-gray-800 w-full h-screen flex flex-col items-center justify-center">
                  <img src={myimg} alt="my dev" className="w-72 h-72" />
                  <h2 className="text-indigo-600 text-3xl font-semibold mt-4">
                    HI Developer 🖐..
                  </h2>
                </div>
                <div className="homeis w-full bg-blue-50 py-4 text-center">
                  <h1 className="text-blue-600 text-2xl">
                    <Link to="/mycards" className="underline">
                      Go to MY Cards👉
                    </Link>
                  </h1>
                </div>
              </>
            }
          />
          <Route path="/mycards" element={<MyCards />} />
          <Route path="/userinfo" element={<Userinfo />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
