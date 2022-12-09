import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/form.css";

function AddBooks() {
  const [book_title, setbook_title] = useState("");
  const [author, setauthor] = useState("");
  const [edition, setEdition] = useState("");
  const navigate = useNavigate();

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      const data = {
        title: book_title,
        author,
        edition,
      };
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
      const url = await fetch("http://localhost:3001/books", options);
      console.log(url);
      // alert(`Your data has been submitted`);
      navigate("/admin-dashboard/book-list");
    } catch (error) {
      console.log(error);
    }
  };
  const handleReset = () => {
    setbook_title("").setauthor("").setedition("");
  };

  return (
    <section className="form-wrapper">
      <div className="img-container"></div>
      <form className="fav-form" onSubmit={(e) => handleForm(e)}>
        <h2>Add Books</h2>
        <div className="input-block">
          <label htmlFor="book_title">Book Title:</label>
          <input
            type="text"
            name="book_title"
            id="book_title"
            placeholder="Enter book title"
            value={book_title}
            onChange={(e) => setbook_title(e.target.value)}
          />
        </div>
        <div className="input-block">
          <label htmlFor="author">Author Name:</label>
          <input
            type="text"
            name="author"
            id="author"
            placeholder="Enter author name"
            value={author}
            onChange={(e) => setauthor(e.target.value)}
          />
        </div>
        <div className="input-block">
          <label htmlFor="edition">Edition Name:</label>
          <input
            type="text"
            name="edition"
            id="edition"
            placeholder="Enter edition name"
            value={edition}
            onChange={(e) => setEdition(e.target.value)}
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
            ADD
          </button>
        </div>
      </form>
    </section>
  );
}

export default AddBooks;
