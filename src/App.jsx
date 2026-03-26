import { useState } from "react";
import List from "./components/List";
import Search from "./components/Search";
import functions from "./functions";


const {array} = functions;
array
function App() {
  const[value, setValue] = useState('');
  return (
    <div>
      <h1>My Hacker Stories</h1>
      <Search value ={value} setValue = {setValue} />
      <hr />
      <List array = {array} />
    </div>
  );
}

export default App;
