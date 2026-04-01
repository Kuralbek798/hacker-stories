import { useState } from "react";
import List from "./components/List";
import Search from "./components/Search";
import functions from "./functions";
import { useEffect } from "react";

const stories = functions.stories;

const useStorageState = (key, initialState) =>{
  const [value, setValue] = useState(localStorage.getItem(key) || initialState);
  useEffect(()=> {
    localStorage.setItem(key, value);
  }, [value, key]);  

  return[value, setValue];
};  

const App = () => {
  const [value, setValue] = useStorageState('search','React');

  const handleSearch = (event) => {
    setValue(event.target.value);
  };
  const searchedStories = stories.filter((story) =>
    story.title.toLowerCase().includes(value.toLowerCase()),
  );

  return (
    <div>
      <h1>My Hacker Stories</h1>
      <Search Search search={value} onSearch={handleSearch} />
      <hr />
      <List array={stories} />
    </div>
  );
};

export default App;
