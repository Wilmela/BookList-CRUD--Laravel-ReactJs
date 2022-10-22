import { useContext, useState } from "react";
import { FaEdit, FaTrash, FaSave, FaTimes } from "react-icons/fa";
import { AppContext } from "../context/AppContext";

const Book = ({ id, title, author, publisher }) => {
  const { deleteBook, updateBook, handleChange } = useContext(AppContext);

  const [onEdit, setOnEdit] = useState(false);

  const quitEdit = () => {
    setOnEdit(false);
  };

  return (
    <tr className="t-row">
      {onEdit ? (
        <input
          type="text"
          name="title"
          defaultValue={title}
          onChange={handleChange}
        />
      ) : (
        <td>
          <p>{title}</p>
        </td>
      )}
      {onEdit ? (
        <input
          type="text"
          name="author"
          defaultValue={author}
          onChange={handleChange}
        />
      ) : (
        <td>
          <p>{author}</p>
        </td>
      )}
      {onEdit ? (
        <input
          type="text"
          name="publisher"
          defaultValue={publisher}
          onChange={handleChange}
        />
      ) : (
        <td>
          <p>{publisher}</p>
        </td>
      )}

      <td className="action">
        {onEdit ? (
          <FaSave className="edit" onClick={() => updateBook(id)} />
        ) : (
          <FaEdit className="edit" onClick={() => setOnEdit(true)} />
        )}
        {onEdit ? (
          <FaTimes className="trash" onClick={quitEdit} />
        ) : (
          <FaTrash className="trash" onClick={() => deleteBook(id)} />
        )}
      </td>
    </tr>
  );
};

export default Book;
