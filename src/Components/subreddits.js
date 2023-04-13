import {BrowserRouter as Router, Switch, Route, Link, NavLink} from "react-router-dom";

const Subreddits = () => (
    <div>
    <Router>
    <h1>Subreddits</h1>
    
    <ul>
        <li><NavLink to="https://www.reddit.com/r/IAmA/">I Am A</NavLink></li>
            <img className="link-icons" src="https://styles.redditmedia.com/t5_2qzb6/styles/communityIcon_v0zs2b3d7f251.png?width=256&v=enabled&s=08559301f63f8b9d72320bbd0726674ad846ffe1"/>
        
        <li><NavLink to="https://www.reddit.com/r/bestof/">best of</NavLink></li>
            <img className="link-icons" src="https://b.thumbs.redditmedia.com/m3UjqYG7IKqoR3deFgEXI6xb2UVKxfCwpeCXwO9VQ1E.png"/>
        
        <li><NavLink to="https://www.reddit.com/r/fatpeoplestories/">fat people stories</NavLink></li>
        <img className="link-icons" src="https://styles.redditmedia.com/t5_2vzax/styles/communityIcon_39ieec0r8cm41.png"/>
        
        <li><NavLink to="https://www.reddit.com/r/pettyrevenge/">petty revenge</NavLink></li>
            <img className="link-icons" src="https://styles.redditmedia.com/t5_2vg7t/styles/communityIcon_6ofkqruptzc71.png?width=256&amp;v=enabled&amp;s=ce2c000e8ec4a8f7ea8990e75bdf20f22cf2bacc"></img>
        
        <li><NavLink to="https://www.reddit.com/r/TalesFromRetail/">Tales from retail</NavLink></li>
            <img className="link-icons" src="https://a.thumbs.redditmedia.com/yMqNoMwSTV13ouTr2n_zZzTr-bHr54QAaVAUBoQqnm4.png">
            </img>
        
        <li><NavLink to="https://www.reddit.com/r/leagueoflegends/">League of Legends</NavLink></li>
            <img className="link-icons" src="https://styles.redditmedia.com/t5_2rfxx/styles/communityIcon_9yj66cjf8oq61.png"></img>
        
        <li><NavLink to="https://www.reddit.com/r/wow/">wow</NavLink></li>
            <img className="link-icons" src="https://styles.redditmedia.com/t5_2qio8/styles/communityIcon_f3a3cxfc6dra1.png"></img>

        <li><NavLink to="https://www.reddit.com/r/battlefield3/">Battlefield 3</NavLink></li>
            <img className="link-icons" src="https://styles.redditmedia.com/t5_2rlua/styles/communityIcon_2bu3u10rq4551.png"></img>

        <li><NavLink to="https://www.reddit.com/r/rage/">Rage</NavLink></li>
            <img className="link-icons2" src="https://styles.redditmedia.com/t5_2qil2/styles/communityIcon_i5jabv2tth421.png"></img>

        <li><NavLink to="https://www.reddit.com/r/creepy/">Creepy</NavLink></li>
            <img className="link-icons2" src="https://b.thumbs.redditmedia.com/esoWKZ1RAQ0teVheg4iGuWlVckxsO1Gky_hj3XNqgbE.png"></img>

        <li><NavLink to="https://www.reddit.com/r/nosleep/">No Sleep</NavLink></li>

        <li><NavLink to="https://www.reddit.com/r/Music/">Music</NavLink></li>
            <path className="link-icons" d="M16.5,2.924,11.264,15.551H9.91L15.461,2.139h.074a9.721,9.721,0,1,0,.967.785ZM8.475,8.435a1.635,1.635,0,0,0-.233.868v4.2H6.629V6.2H8.174v.93h.041a2.927,2.927,0,0,1,1.008-.745,3.384,3.384,0,0,1,1.453-.294,3.244,3.244,0,0,1,.7.068,1.931,1.931,0,0,1,.458.151l-.656,1.558a2.174,2.174,0,0,0-1.067-.246,2.159,2.159,0,0,0-.981.215A1.59,1.59,0,0,0,8.475,8.435Z"></path>

        <li><NavLink to="https://www.reddit.com/r/StarWars/">StarWars</NavLink></li>
            <img className="link-icons2" src="https://styles.redditmedia.com/t5_2qi4s/styles/communityIcon_0ls09l47f1561.png"></img>

        <li><NavLink to="https://www.reddit.com/r/DunderMifflin/">Dunder Mifflin</NavLink></li>
            <img className="link-icons" src="https://styles.redditmedia.com/t5_2s9h3/styles/communityIcon_ujdrcdijabb61.png"></img>

        <li><NavLink to="https://www.reddit.com/r/FiftyFifty/">Fifty Fifty</NavLink></li>
            <img className="link-icons2" src="https://b.thumbs.redditmedia.com/s4O7OJRmdK41MbxovvGQunqN9oAd9Oak6pzSo3K5vzU.png"></img>
  
        <li><NavLink to="https://www.reddit.com/r/Unexpected/">Unexpected</NavLink></li>
            <img className="link-icons2" src="https://b.thumbs.redditmedia.com/Rtu2Mw0L-mx7AeYtHKkbAh75jQbgzy_Hk2UIlLeZFSs.png"></img>

        <li className="more-options-link"><NavLink to="https://www.reddit.com/r/TheoryOfReddit/comments/1f7hqc/the_200_most_active_subreddits_categorized_by/">More subreddits</NavLink></li>

    </ul>
    </Router>
    </div>
  );
  
  export default Subreddits
 
