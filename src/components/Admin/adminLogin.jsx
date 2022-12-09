import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../CSS/form.css";

const AdminLogin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rating, setRating] = useState(0);
  const [language, setLanguage] = useState("");
  const navigate = useNavigate();

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      const data = {
        email,
        rating,
        password,
        language,
      };
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
      const url = await fetch(" http://localhost:3001/books", options);
      console.log(url);
      alert("Your data has been submitted");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  const handleReset = () => {
    setEmail("").setPassword("").setRating(0).setLanguage("");
  };
  return (
    <section className="form-wrapper">
      <div className="img-container"></div>
      <form className="fav-form" onSubmit={handleForm}>
        <h2>Sign Up!</h2>
        <div className="input-block">
          <label htmlFor="email">Email </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            name="email"
            id="email"
          />
        </div>
        <div className="input-block">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            id="password"
            placeholder="Enter Password"
          />
        </div>
        <div
          className="input-block"
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "1rem",
            borderBottom: "none",
          }}
        >
          <Link to={"/admin-dashboard"} className="cta add-favs">
            LOGIN
          </Link>
        </div>
      </form>
    </section>
  );
};

export default AdminLogin;
