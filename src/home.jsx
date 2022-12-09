import React from "react";
import { Link } from "react-router-dom";
import "../src/components/CSS/home.css";

function Home() {
  return (
    <section className="home_container">
      <div className="cover">
        <img
          src="https://cdn.pixabay.com/photo/2016/03/26/22/21/books-1281581__480.jpg"
          alt=""
        />
      </div>
      <div className="wrapper">
        <div style={{ fontFamily: "'Lexend', sans-serif", color: "white" }}>
          Library Managment System
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "80%",
          }}
        >
          <div className="profile">
            <div
              style={{
                height: "2.5rem",
                width: "2.5rem",
                marginBottom: "1.5rem",
              }}
            >
              <img
                src="https://www.citypng.com/public/uploads/preview/download-profile-user-round-orange-icon-symbol-png-11639594360ksf6tlhukf.png"
                alt="user"
                width={"100%"}
                height={"100%"}
              />
            </div>
            <div>
              <Link to="/admin_login" className="btn admin">
                Admin
              </Link>
            </div>
          </div>

          <div className="profile">
            <div
              style={{
                height: "2.5rem",
                width: "2.5rem",
                marginBottom: "1.5rem",
              }}
            >
              <img
                src="https://www.citypng.com/public/uploads/preview/hd-profile-user-round-green-icon-symbol-transparent-png-11639594320ayr6vyoidq.png"
                alt="user"
                width={"100%"}
                height={"100%"}
              />
            </div>
            <div>
              <Link to="/user-login" className="btn user">
                User
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
