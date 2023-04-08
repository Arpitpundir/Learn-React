import {useState} from "react";
import { useContext } from "react";
import BooksContext from "./context/books";
function BookCreate(){
  const [bookName, setBookName] = useState('');
  const {createBook} = useContext(BooksContext);
  const handleChange = (event) => {
    event.preventDefault();
    setBookName(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    createBook(bookName);
    setBookName('');
  }
  return (
    <div>
      <form onSubmit = {handleSubmit}>
        <input type = "text" value = {bookName} onChange = {handleChange}></input>
          <button type = "submit"> Create Book</button>
      </form>
    </div>
  );
}

export default BookCreate;