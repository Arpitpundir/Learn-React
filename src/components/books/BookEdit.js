import { useContext, useState } from "react";
import BooksContext from "./context/books";

function BookEdit({book, handleEditBookSubmit}){
  const [newTitle, setNewTitle] = useState(book.name);
  const {saveEditedBook} = useContext(BooksContext);
  const handleChange = (event) => {
    event.preventDefault();
    setNewTitle(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBook = {...book, name: newTitle}
    saveEditedBook(newBook);
    handleEditBookSubmit();
  }

  return <form onSubmit = {handleSubmit}>
    <input type = 'text' value = {newTitle} onChange={handleChange}></input>
    <button type = "submit">Save</button>
  </form>
}

export default BookEdit;