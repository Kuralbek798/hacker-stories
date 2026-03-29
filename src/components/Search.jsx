

const Search = ({search,onSearch}) => (
  //const{search, onSearch} = props;
     <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" value ={search}  onChange={onSearch} />     
    </div>    
 );

export default Search;