import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Book from "./Book";

// const books = [
//   {
//     id: 1,
//     title: "Good",
//     author: "Mela",
//     publisher: "Wilson",
//   },
//   {
//     id: 2,
//     title: "Good",
//     author: "Mela",
//     publisher: "Wilson",
//   },
//   {
//     id: 3,
//     title: "Good",
//     author: "Mela",
//     publisher: "Wilson",
//   },
//   {
//     id: 4,
//     title: "Good",
//     author: "Mela",
//     publisher: "Wilson",
//   },
//   {
//     id: 5,
//     title: "Good",
//     author: "Mela",
//     publisher: "Wilson",
//   },
// ];

const Table = () => {
  const { books } = useContext(AppContext);
  return (
    <div className="table">
      {books.length !== 0 ? (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Publisher</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {books.reverse().map((book) => (
              <Book
                key={book.id}
                id={book.id}
                title={book.title}
                author={book.author}
                publisher={book.publisher}
              />
            ))}
          </tbody>
        </table>
      ) : (
        <h1>No books to show</h1>
      )}
    </div>
  );
};

export default Table;
