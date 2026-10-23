import { useState } from "react";
import SearchBar from "../components/SearchBar";
import ProductList from "../components/ProductList";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searched, setSearched] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSearched(false);

    fetch(
      `https://world.openbeautyfacts.org/cgi/search.pl?search_terms=${searchTerm}&search_simple=1&action=process&json=1`
    )
      .then((response) => response.json())
      .then((data) => {
        const filteredProducts = data.products.filter((product) => {
          return product.product_name && product.ingredients_text;
        });

        setProducts(filteredProducts);
        setLoading(false);
        setSearched(true);
      })
      .catch(() => {
        setError("Something went wrong. Please try again.");
        setLoading(false);
      });
  }

  return (
    <div>
      <h1>Search Products</h1>

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSubmit={handleSubmit}
      />

      {loading && <p className="message">Loading...</p>}

      {error && <p className="message">{error}</p>}

      {searched && !loading && products.length === 0 && (
        <p className="message">No products found.</p>
      )}

      <ProductList products={products} />
    </div>
  );
}

export default Search;