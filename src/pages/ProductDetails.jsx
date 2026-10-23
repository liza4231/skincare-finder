import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

function ProductDetails() {
  const { code } = useParams();
  const location = useLocation();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`https://world.openbeautyfacts.org/api/v2/product/${code}.json`)
      .then((response) => response.json())
      .then((data) => {
        if (data.product) {
          setProduct(data.product);
        } else {
          setError("Product information could not be found.");
        }

        setLoading(false);
      })
      .catch(() => {
        setError("Something went wrong while loading the product.");
        setLoading(false);
      });
  }, [code]);

  if (loading) {
    return <p className="message">Loading product...</p>;
  }

  if (error) {
    return <p className="message">{error}</p>;
  }

  return (
    <div className="product-details">
      <Link
        to="/"
        state={{
          searchTerm: location.state?.searchTerm || "",
          products: location.state?.products || [],
          selectedBrand: location.state?.selectedBrand || "All",
          searched: true,
        }}
      >
        ← Back to Search Results
      </Link>

      <h1>{product.product_name}</h1>

      {product.image_front_url && (
        <img
          src={product.image_front_url}
          alt={product.product_name}
        />
      )}

      <h3>Brand</h3>
      <p>{product.brands || "Unknown Brand"}</p>

      <h3>Ingredients</h3>
      <p>
        {product.ingredients_text || "Ingredients not available."}
      </p>
    </div>
  );
}

export default ProductDetails;