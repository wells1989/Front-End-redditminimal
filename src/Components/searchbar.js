const SearchBar = ({filteredStory, onChange}) => {
  
    const barStyle = {width:"30rem",height: "3rem", background:"#F0F0F0", border:"none", padding:"0.5rem", margin: "2rem"};
    const iconStyle = {width: "3rem", height: "3rem", cursor: "pointer"};
    
    function Search({handleSearch}) {
      function onChange(e) {
        handleSearch(e.target.value);
      }
    }

    return (
      <div>
      <input 
       style={barStyle}
       placeholder="search Reddit Minimal"
       onChange={onChange}
      />

    <button type="submit" 
    style={iconStyle} 
    aria-label="Search"
    >
    <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
    </button>
    </div>
    );
  }
  
  export default SearchBar;

  
