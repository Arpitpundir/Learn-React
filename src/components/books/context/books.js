import {createContext, useState} from 'react';
import axios from "axios";
const BooksContext = createContext();
function Provider({children}){

  const [books, setBooks] = useState([]);
  const fetchBooks = async () => {
    const response = await axios.get('http://localhost:3001/books');
    setBooks(response.data);
  }
  const createBook = async (title) => {
    const response = await axios.post('http://localhost:3001/books',{
      name: title
    });
    const updatedBooks = [...books, {...response.data}];
    setBooks(updatedBooks);
  }

  const deleteBookById = async (deletedBookId) => {
    await axios.delete(`http://localhost:3001/books/${deletedBookId}`)
    const updatedBooks = books.filter(currentBook => currentBook.id !== deletedBookId);
    setBooks(updatedBooks);
  }

  const saveEditedBook = async (editedBook) => {
    const response = await axios.put(`http://localhost:3001/books/${editedBook.id}`,{name: editedBook.name})
    const newBooks = books.map(book => {
      if(editedBook.id === book.id){
        return {...book, ...response.data};
      }
      return book;
    })
    setBooks(newBooks);
  }

  const valuesToShare = {
    books,
    createBook,
    saveEditedBook,
    fetchBooks,
    deleteBookById
  }

  return <BooksContext.Provider value = {valuesToShare}>{children}</BooksContext.Provider>
}
export {Provider};
export default BooksContext;