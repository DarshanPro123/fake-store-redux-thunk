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
import Navbar from "./components/Navbar/Navbar.jsx";

const App = () => {
  return (
    <Router>
      <div>
        {/* <----------------------Navbar ---------------------> */}
        <Navbar />
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
