import SearchBar from "./components/pics-app/SearchBar";
import searchImages from "./api";
import ImageList from "./components/pics-app/ImageList";
import { useState } from "react";
import BookCreate from "./components/books/BookCreate";
import BookList from "./components/books/BookList";

/*
// a pics app fetches pics unsplash for keywork user has entered and renders them
function App(){
  const [images, setImages] = useState([]);
  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    console.log(result);
    setImages(result);
  }
  return (
    <div>
      <SearchBar onSubmit = {handleSubmit}/>
      <ImageList images = {images}/>
    </div>
  )
}
*/

function App() {
  const [books, setBooks] = useState([]);
  const createBook = (title) => {
    const updatedBooks = [...books, { id: Math.random() * 9999, name: title }];
    setBooks(updatedBooks);
  }

  const deleteBookById = (deletedBookId) => {
    const updatedBooks = books.filter(currentBook => currentBook.id !== deletedBookId);
    setBooks(updatedBooks);
  }

  const saveEditedBook = (editedBook) => {
    const newBooks = books.map(book => {
      if(editedBook.id === book.id){
        return editedBook;
      }
      return book;
    })
    setBooks(newBooks);
  }

  return (
<div>
<BookCreate onCreateBook = {createBook}/>
<BookList booksList = {books} deleteBookById = {deleteBookById} saveEditedBook = {saveEditedBook}/>
</div>

  )
}


export default App;