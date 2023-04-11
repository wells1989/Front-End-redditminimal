import logo from './logo.svg';
import './App.css';
import SearchBar from './Components/searchbar';
import { useState } from "react";

function App() {

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredStory, setFilteredStory] = useState("");

  const stories = [
    "New story 1",
    "Brazil story example",
    "long anecdote",
    "Dennis and frank go to Budapest",
    "story"
  ];

function handleSearch(newSearchQuery) {
    setSearchQuery(newSearchQuery);
    stories.map((story => {
      if (story.includes(searchQuery)) {
        setFilteredStory(story)
      }
    }))
  }

  const displayStories = stories.map((story =>{
    return (
      <li>{story}</li>
    )
  }))

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className = "App-heading">
          RedditMinimal App
        </p>
        <SearchBar handleSearch={handleSearch} story={filteredStory}/>
        {filteredStory}
      </header>

      <body>
        <h1>Stories</h1>
        {displayStories}
      </body>

      <footer>

      </footer>
    </div>
  );
}

export default App;
