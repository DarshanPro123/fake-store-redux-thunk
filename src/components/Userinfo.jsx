import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Userinfo.css";
const Userinfo = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.storerestapi.com/users")
      .then((res) => {
        setUsers(res.data.data); // Assuming the data is in res.data.data
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <>
      <h1>Users Information</h1>
      <div className="container-users">
        {users.map((user) => (
          <div className="user-box" key={user.id}>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Number: {user.number}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Userinfo;
