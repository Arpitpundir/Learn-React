import BookShow from "./BookShow";
function BookList({booksList, deleteBookById, saveEditedBook}){
  const bookShowList = booksList.map(currentBook => {
    return <BookShow book = {currentBook} deleteBookById = {deleteBookById} saveEditedBook = {saveEditedBook}/>
  })

  return bookShowList;
}

export default BookList;