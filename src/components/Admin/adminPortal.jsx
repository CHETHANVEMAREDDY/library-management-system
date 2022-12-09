import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../home";
import SideBar from "./sideBar";
import AddUser from "./addUser";
import AddBooks from "./addBooks";
import BookList from "./bookList";
import UserList from "./userList";
import UserLogin from "../Users/userLogin";
import Card from "./Card";
function AdminPortal(props) {
  const email = props.data;

  return (
    <section style={{ display: "flex" }}>
      <SideBar data={email} />
      <Routes>
        <Route path="/" element={<Card />} />
        <Route
          path="/add-user"
          element={
            <div
              style={{
                position: "absolute",
                left: "15%",
                width: "80%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <AddUser />
            </div>
          }
        />
        <Route
          path="/add-books"
          element={
            <div style={{ position: "absolute", left: "15%", width: "80%" }}>
              <AddBooks />
            </div>
          }
        />
        <Route path="/book-list" element={<BookList />} />
        <Route
          path="/user-list"
          element={
            <React.Fragment>
              <UserList />
            </React.Fragment>
          }
        />
      </Routes>
    </section>
  );
}

export default AdminPortal;
