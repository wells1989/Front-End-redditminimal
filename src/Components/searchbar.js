const SearchBar = () => (
  <form action="/" method="get">
      <label htmlFor="header-search">
          <span className="visually-hidden">Search </span>
      </label>
      <input
          type="text"
          id="header-search"
          placeholder="Search Todays Top Posts"
          name="s" 
      />
      <button className = "Buttons" type="submit">Search</button>
  </form>
);

export default SearchBar;