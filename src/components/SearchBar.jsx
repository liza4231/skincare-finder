function SearchBar({ searchTerm, setSearchTerm, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search skincare products"
      />

      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;