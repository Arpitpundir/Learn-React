import { useState } from "react";
import BookEdit from "./BookEdit";
function BookShow({ book, deleteBookById, saveEditedBook }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleDeleteClick = (event) => {
    deleteBookById(book.id);
  }

  const handleEditClick = (event) => {
    setIsEditing(!isEditing);
  }

  const handleEditBookSubmit = (book) => {
    saveEditedBook(book);
    setIsEditing(false);
  }

  if (isEditing) {
    return <BookEdit book={book} handleEditBookSubmit={handleEditBookSubmit}/>
  }
  return <div>
    <h3 onClick={handleDeleteClick}>{book.name}</h3>
    <button onClick={handleEditClick}>Edit me</button>
  </div>
}

export default BookShow;