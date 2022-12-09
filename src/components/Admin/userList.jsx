import React from "react";
import { useState, useEffect } from "react";
import "../CSS/cards.css";
import "../CSS/userList.css";

const UserList = () => {
  const [users, updateUsers] = useState([]);
  const [loading, updateLoading] = useState(true);
  useEffect(() => {
    const fetchUsers = async () => {
      const url = await fetch("http://localhost:3001/users");
      const res = await url.json();
      updateUsers(res);
      updateLoading(false);
    };
    fetchUsers();
  }, []);
  return (
    <section className="card-main-wrapper">
      {loading && <div className="loader">Loading...</div>}
      {<h4>Total Users: {users.length}</h4>}
      <div className="userCard">
        {users.map((user) => {
          return (
            <div
              className="my-card"
              key={user.contact}
              style={{ maxWidth: "15rem", marginRight: "3rem" }}
            >
              <p>Full Name: {user.name}</p>
              <p>Email: {user.email}</p>
              <p>Contact: {user.contact}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default UserList;
