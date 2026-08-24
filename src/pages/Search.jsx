import { useState } from "react";
import ProductCard from "../components/ProductCard";

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

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search skincare products"
        />

        <button type="submit">Search</button>
      </form>

      {loading && <p className="message">Loading...</p>}

      {error && <p className="message">{error}</p>}

      {searched && !loading && products.length === 0 && (
        <p className="message">No products found.</p>
      )}

      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.code}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}

export default Search;