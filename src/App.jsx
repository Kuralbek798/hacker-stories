import { useState } from "react";
import List from "./components/List";
import Search from "./components/Search";
import functions from "./functions";


const {array} = functions;
array
function App() {
  
  const[count, setCount] = useState(0)
 
  function increaseCount(){   
  setCount((count) => count +1);  
   }
  const handleSearch = (event) => console.log(event.target.value);




  return (
    <div>
      <h1>My Hacker Stories</h1>
      <Search onSearch = {handleSearch} />
      <hr />
      <List array = {array} />
      <button type='button' onClick ={increaseCount}>
       Increase
      </button>
      <p>{'Count' +  count}</p>
    </div>
  );
  
}

export default App;
