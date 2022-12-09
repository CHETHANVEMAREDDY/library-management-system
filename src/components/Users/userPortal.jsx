import React from "react";
import { Routes, Route } from "react-router-dom";
import SideBar from "./sideBarUser";
import BookList from "../Admin/bookList";
import Card from "../Admin/Card";
const UserPortal = () => {
  return (
    <section style={{ display: "flex" }}>
      <SideBar />
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/book-list" element={<BookList />} />
      </Routes>
    </section>
  );
};

export default UserPortal;
