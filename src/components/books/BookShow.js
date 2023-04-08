import {useState } from "react";
import BookEdit from "./BookEdit";
import useBooksContext from "./hooks/use-books-context";

function BookShow({ book}) {
  const [isEditing, setIsEditing] = useState(false);
  const {deleteBookById} = useBooksContext();
  const handleDeleteClick = (event) => {
    deleteBookById(book.id);
  }

  const handleEditClick = (event) => {
    setIsEditing(!isEditing);
  }

  const handleEditBookSubmit = () => {
    setIsEditing(false);
  }

  if (isEditing) {
    return <BookEdit book={book} handleEditBookSubmit={handleEditBookSubmit}/>
  }
  return <div>
    <h3 onClick={handleDeleteClick} key={book.id}>{book.name}</h3>
    <button onClick={handleEditClick}>Edit me</button>
  </div>
}

export default BookShow;