import logo from './logo.svg';
import './App.css';
import SearchBar from './Components/searchbar';
import { useState } from "react";
import Subreddits from './Components/subreddits';

const posts = [
  {name: "Politics Story",
  likes: 0,
button:"Like",
button2: "dislike"},
  {name: "Sports win", likes: 0, button: "Like",
  button2: "dislike"},
  {name: "New Invention", likes: 0,
  button: "Like",
button2: "dislike"},
  {name: "Covid news", likes: 0,
  button: "Like",
button2: "dislike"},
  {name: "European Affairs", likes: 0, button: "Like",
  button2: "dislike"},
  {name: "second Sports win", likes: 0, button: "Like",
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

  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);
 
  const [activeBtn, setActiveBtn] = useState("none");

  const handleLikeClick = () => {
    setLikeCount(likeCount + 1);
    setActiveBtn("like")
  };

  const handleDislikeClick = () => {
    setDislikeCount(dislikeCount + 1);
    setActiveBtn("dislike")
  };

  const resetLikes = () => {
    setLikeCount(0);
    setDislikeCount(0);
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
      <h2 className = "Results-Titles">Todays Top Posts</h2> 
      <div className="Total-Like-Buttons">
      <button className={`btn ${activeBtn === "like" ? "like-active" : ""}`} id="Total-Likes-Button">Total Likes: {likeCount}</button>
      <button className={`btn ${activeBtn === "dislike" ? "dislike-active" : ""}`} id="Total-Dislikes-Button">Total Dislikes: {dislikeCount}</button>
      <button className={`btn ${activeBtn === "dislike" ? "dislike-active" : ""}`} id="Reset-Button" onClick={resetLikes}>Reset likes / dislikes</button>
      </div>
      <div>
        <ul className="Results-List">
            {filteredPosts.map((post => (
              <div className="Results-List">
              <li key={post.id}>{post.name}</li>
              <button className={`btn ${activeBtn === "like" ? "like-active" : ""}`} onClick={handleLikeClick}>Like</button>
                <img className= "Like-Button-Symbol" src='https://cdn.worldvectorlogo.com/logos/thumbs-up-facebook.svg' alt="like thumbs up"></img>
              <button className={`btn ${activeBtn === "dislike" ? "dislike-active" : ""}`} onClick={handleDislikeClick}>Dislike</button>
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
