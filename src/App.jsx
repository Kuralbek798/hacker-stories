import { useState } from "react";
import List from "./components/List";
import Search from "./components/Search";
import functions from "./functions";


const {array} = functions;
array
function App() {
  const[value, setValue] = useState('');
  const[count, setCount] = useState(0)
 
  function increaseCount(){
   
  setCount((count) => count +1);
   
  
  }
  
  return (
    <div>
      <h1>My Hacker Stories</h1>
      <Search value ={value} setValue = {setValue} />
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
