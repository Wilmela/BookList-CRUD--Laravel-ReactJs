import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Form = () => {
  const { handleChange, addBook } = useContext(AppContext);
  const submitForm = (e) => {
    e.preventDefault();
    addBook();
  };
  return (
    <div className="form">
      <p>Add a book info</p>
      <form onSubmit={submitForm}>
        <label htmlFor="title">
          Title
          <input
            type="text"
            name="title"
            placeholder="title"
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="author">
          Author
          <input
            type="text"
            name="author"
            placeholder="author"
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="publisher">
          Publisher
          <input
            type="text"
            name="publisher"
            placeholder="publisher"
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">ADD</button>
      </form>
    </div>
  );
};

export default Form;
