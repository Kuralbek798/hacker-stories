import { useState } from "react";


const Search = (onSearch) => {
  const[searchValue, setSearchValue] = useState('');
  const handleChange = (event) =>{     
   setSearchValue(event.target.value)
   onSearch(event)
  }
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" value={searchValue} onChange={handleChange} />
      <p>{'The value is: ' + searchValue}</p>
    </div>
    
  );
}

export default Search;