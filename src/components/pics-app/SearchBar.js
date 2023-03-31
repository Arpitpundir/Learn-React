import { useState } from "react";
const SearchBar = ({onSubmit}) => {
  const [searchText, setSearchText] = useState('');
  function handleSubmit(event){
    event.preventDefault();
    onSubmit(searchText);
  }

  function handleChange(event){
    setSearchText(event.target.value);
  }
  return (
    <div>
      <form onSubmit = {handleSubmit}> 
          <input type = "text" name = "searchString" value = {searchText} onChange = {handleChange}></input>
      </form> 
    </div>
  )
};

export default SearchBar;