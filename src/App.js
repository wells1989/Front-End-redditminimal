import logo from './logo.svg';
import './App.css';
import SearchBar from './Components/searchbar';
import { useState } from "react";

  const posts = [
    { id: '1', name: 'This first post is about React' },
    { id: '2', name: 'This next post is about Preact' },
    { id: '3', name: 'We have yet another React post!' },
    { id: '4', name: 'This is the fourth and final post' },
];

const filterPosts = (posts, query) => {

  if (!query) {  
    return posts;
  }

  else {
    return posts.filter((post) => {
    const postName = post.name.toLowerCase();
    return postName.includes(query);
})};
};

const App = () => {

  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState(query || '');
  const filteredPosts = filterPosts(posts, searchQuery);

  var after = "";

  function fetchMemes() {
  
    if (document.getElementById("memes")) {
      document.getElementById("memes").remove();
    }
  
    let parentdiv = document.createElement("div");
    parentdiv.id = "memes";
    fetch(`https://www.reddit.com/r/memes.json?after=${after}`)
      .then((response) => response.json())
      .then((body) => {
        after = body.data.after;
        for (let index = 0; index < body.data.children.length; index++) {
          if (body.data.children[index].data.post_hint === "image") {
            let div = document.createElement("div");
            let h4 = document.createElement("h4");
            let image = document.createElement("img");
            image.src = body.data.children[index].data.url_overridden_by_dest;
            h4.textContent = body.data.children[index].data.title;
            div.appendChild(h4);
            div.appendChild(image);
            parentdiv.appendChild(div);
          }
        }
        document.body.appendChild(parentdiv);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className = "App-heading">
          RedditMinimal App
        </p>
        <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        />
        <button className = "Buttons" onClick={() => window.location.reload(true)}> Refresh</button>
        <button className = "Buttons" onClick={fetchMemes}>Random</button>
      </header>

      <body>
      <h2 className = "Results-Titles">Memes</h2>
      <ul className="Results-List">
          
          {filteredPosts.map((post => (
            <li key={post.id}>{post.name}</li>
          )))}
       </ul> 
      </body>

      <footer>

      </footer>
    </div>
  );
}

export default App;
