import SearchBar from "./components/pics-app/SearchBar";
import searchImages from "./api";
import ImageList from "./components/pics-app/ImageList";
import {useState} from "react";

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

export default App;