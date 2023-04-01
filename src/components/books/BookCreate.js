import {useState} from "react";
function BookCreate({onCreateBook}){
  const [bookName, setBookName] = useState('');

  const handleChange = (event) => {
    event.preventDefault();
    setBookName(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreateBook(bookName);
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