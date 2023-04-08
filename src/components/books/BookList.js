import BookShow from "./BookShow";
import { useContext } from "react";
import BooksContext from "./context/books";
function BookList(){
  const {books} = useContext(BooksContext);
  const bookShowList = books.map(currentBook => {
    return <BookShow book = {currentBook}/>
  })

  return bookShowList;
}

export default BookList;