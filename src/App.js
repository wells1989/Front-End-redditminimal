import logo from './logo.svg';
import './App.css';
import SearchBar from './Components/searchbar';
import { useState } from "react";
import Subreddits from './Components/subreddits';

const posts = [
  {name: "Politics Story",
button:"Like",
button2: "dislike"},
  {name: "Sports win", button: "Like",
  button2: "dislike"},
  {name: "New Invention",
  button: "Like",
button2: "dislike"},
  {name: "Covid news",
  button: "Like",
button2: "dislike"},
  {name: "European Affairs", button: "Like",
  button2: "dislike"},
  {name: "second Sports win", button: "Like",
  button2: "dislike"}
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

  function fetchFirstMemes() {
  
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
          RedditMemes App
        </p>
        <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        />
        <button className = "Buttons" onClick={() => window.location.reload(true)}> Refresh</button>
        <button className = "Buttons" onClick={fetchMemes}>Random</button>
      </header>

      <body>
      <h2 className = "Results-Titles">Todays Posts</h2>
      <div>
        <ul className="Results-List">
            {filteredPosts.map((post => (
              <div className="Results-List">
              <li key={post.id}>{post.name}</li>
              <li className="Like-Button" key={post.id}>{post.button}</li>
                <img className= "Like-Button-Symbol" src='https://cdn.worldvectorlogo.com/logos/thumbs-up-facebook.svg' alt="like thumbs up"></img>
              <li className="Dislike-Button" key={post.id}>{post.button2}</li>
                <img className= "Dislike-Button-Symbol" src='https://e7.pngegg.com/pngimages/637/974/png-clipart-social-media-facebook-messenger-security-hacker-blog-free-s-dislike-button-miscellaneous-user-profile-thumbnail.png' alt="dislike thumbs up"></img>
              </div>
            )))}
        </ul>
       </div>

       <div>
       <h2 className = "Results-Titles">Memes</h2>
        {fetchFirstMemes()}
       </div>
       <div className="Subreddits">
        <Subreddits/>
       </div>
      </body>

      <footer>

      </footer>
    </div>
  );
}

export default App;
