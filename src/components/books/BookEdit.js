import { useState } from "react";
function BookEdit({book, handleEditBookSubmit}){
  const [newTitle, setNewTitle] = useState(book.name);

  const handleChange = (event) => {
    event.preventDefault();
    setNewTitle(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBook = {...book, name: newTitle}
    handleEditBookSubmit(newBook);
  }

  return <form onSubmit = {handleSubmit}>
    <input type = 'text' value = {newTitle} onChange={handleChange}></input>
    <button type = "submit">Save</button>
  </form>
}

export default BookEdit;