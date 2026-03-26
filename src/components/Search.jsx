

const Search = ({value, setValue}) => {

  const handleChange = (event) =>{     
   setValue(event.target.value)
  }
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" value={value} onChange={handleChange} />

      <p>{'The value is: ' + value}</p>
    </div>
    
  );
}

export default Search;