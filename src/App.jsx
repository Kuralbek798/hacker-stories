import { useState } from "react";
import List from "./components/List";
import Search from "./components/Search";
import functions from "./functions";


const {array} = functions;
array
function App() {

  const[searchTerm, setSearchTerm] = useState('React'); 
  const handleSearch = (event) => setSearchTerm(event.target.value);



  return (
    <div>
      <h1>My Hacker Stories</h1>
      <Search Search search ={searchTerm} onSearch = {handleSearch} />
      <hr />
      <List array = {array} />
     
    </div>
  );
  
}

export default App;
