import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../CSS/sidebar.css";

const SideBar = () => {
  const navigate = useNavigate();
  return (
    <section className="side-bar">
      <div className="profile-container">
        {/* <div className="image">
          <h1>Admin {props.data}</h1>
          <img
            src="https://cdn-icons-png.flaticon.com/128/3237/3237472.png"
            alt=""
          />
        </div> */}
        Admin
        <p>admin@gmail.com</p>
      </div>
      <div className="side-links">
        <div className="link">
          <div className="iState">
            <Link to="/admin-dashboard">Dashboard</Link>
          </div>
        </div>
        <div className="link">
          <div className="iState">
            <Link to="/admin-dashboard/add-user">Add User</Link>
          </div>
        </div>
        <div className="link">
          <div className="iState">
            <Link to="/admin-dashboard/add-books">Add Books</Link>
          </div>
        </div>
        <div className="link">
          <div className="iState">
            <Link to="/admin-dashboard/book-list">Book List</Link>
          </div>
        </div>
        <div className="link">
          <div className="iState">
            <Link to="/admin-dashboard/user-list">User List</Link>
          </div>
        </div>
        <div className="link-fix">
          <div className="iState">
            <p onClick={() => navigate("/")}>Logout</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SideBar;
