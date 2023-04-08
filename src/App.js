import { useContext, useEffect, useState } from "react";
import BookCreate from "./components/books/BookCreate";
import BookList from "./components/books/BookList";
import BooksContext from "./components/books/context/books";
import Button from "./components/Button";
import classnames from 'classnames';
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";
import Accordian from './components/routing-app/Accordian';
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
/*
function App() {
  const {fetchBooks} = useContext(BooksContext);
  useEffect(() => {
    fetchBooks();
  }, [])

  return (
<div>
<BookCreate/>
<BookList/>
</div>

  )
}
*/

function App() {
  return (
    <div>
      <Accordian/>
    </div>
  )
}


export default App;