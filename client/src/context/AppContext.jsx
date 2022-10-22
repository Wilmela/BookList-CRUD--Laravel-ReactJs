import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [book, setBook] = useState({ title: "", author: "", publisher: "" });
  const { title, author, publisher } = book;

  const [books, setBooks] = useState([]);


  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const getBooks = async () => {
    try {
      const { data } = await axios.get("/api/books");
      console.log(data);
      setBooks(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const addBook = async () => {
    try {
      const { data } = await axios.post("/api/book", {
        title,
        author,
        publisher,
      });
      setBooks(data);
      window.location.reload();
    } catch (error) {
      console.log(error.message);
    }
  };
  const updateBook = async (id) => {
    try {
      const { data } = await axios.put(`/api/book/${id}`, {
        title,
        author,
        publisher,
      });

      //   const res = await fetch(`/api/book/${id}`, {
      //     method: "PUT",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({
      //       title,
      //       author,
      //       publisher,
      //     }),
      //   });
      //   const data = await res.json();
      setBooks(
        books.map((bk) =>
          bk.id === id
            ? {
                ...bk,
                title: data.title,
                author: data.author,
                publisher: data.publisher,
              }
            : bk
        )
      );
      window.location.reload();
    } catch (error) {
      console.log(error.message);
    }
  };

  const deleteBook = async (id) => {
    try {
      await axios.delete(`/api/book/${id}`);
      setBooks(books.filter((bk) => bk.id !== id));
      window.location.reload();
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);
  return (
    <AppContext.Provider
      value={{ handleChange, book, books, addBook, deleteBook, updateBook }}
    >
      {children}
    </AppContext.Provider>
  );
};
