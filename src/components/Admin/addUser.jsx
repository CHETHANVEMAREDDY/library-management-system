import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/form.css";

function AddUser() {
  const [name, setName] = useState("");
  const [emailID, setEmailID] = useState("");
  const [contact, setContact] = useState("");

  const navigate = useNavigate();

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      const data = {
        name,
        emailID,
        contact,
      };
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
      const url = await fetch("http://localhost:3001/users", options);
      console.log(url);
      alert(`Account Created!`);
      navigate("/admin-dashboard/user-list");
    } catch (error) {
      console.log(error);
    }
  };
  const handleReset = () => {
    setName("").setEmailID("").setRating(0).setLanguage("");
  };
  return (
    <section className="form-wrapper">
      <div className="img-container"></div>
      <form action="" className="fav-form" onSubmit={(e) => handleForm(e)}>
        <h2>Add User!</h2>
        <div className="input-block">
          <label htmlFor="name">Full Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter full name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input-block">
          <label htmlFor="emailID">Email ID:</label>
          <input
            type="text"
            name="emailID"
            id="emailID"
            placeholder="Enter email ID"
            value={emailID}
            required
            onChange={(e) => setEmailID(e.target.value)}
          />
        </div>
        <div className="input-block">
          <label htmlFor="contact">Contact No:</label>
          <input
            type="text"
            name="contact"
            id="contact"
            placeholder="Enter Contct Number"
            value={contact}
            required
            onChange={(e) => setContact(e.target.value)}
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
          <button type="submit" className="cta add-favs">
            ADD USER
          </button>
        </div>
      </form>
    </section>
  );
}

export default AddUser;
