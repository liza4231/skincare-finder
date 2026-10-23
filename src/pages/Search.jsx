import { useState } from "react";
import SearchBar from "../components/SearchBar";
import ProductList from "../components/ProductList";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searched, setSearched] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState("All");

  function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSearched(false);
    setSelectedBrand("All");

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

  const brands = [
    "All",
    ...new Set(
      products
        .map((product) => product.brands)
        .filter((brand) => brand)
    ),
  ];

  const displayedProducts =
    selectedBrand === "All"
      ? products
      : products.filter((product) => product.brands === selectedBrand);

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

      {searched && !loading && products.length > 0 && (
        <div className="search-options">
          <p>{displayedProducts.length} products found</p>

          <label htmlFor="brand">Filter by Brand: </label>

          <select
            id="brand"
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
          >
            {brands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </div>
      )}

      <ProductList products={displayedProducts} />
    </div>
  );
}

export default Search;