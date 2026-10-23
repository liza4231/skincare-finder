import { Link } from "react-router-dom";

function ProductCard({
  product,
  searchTerm,
  allProducts,
  selectedBrand,
}) {
  return (
    <div className="product-card">
      {product.image_front_url && (
        <img
          src={product.image_front_url}
          alt={product.product_name || "Skincare product"}
        />
      )}

      <h2>{product.product_name}</h2>

      <p>Brand: {product.brands || "Unknown Brand"}</p>

      <Link
        to={`/product/${product.code}`}
        state={{
          searchTerm: searchTerm,
          products: allProducts,
          selectedBrand: selectedBrand,
        }}
      >
        View Details
      </Link>
    </div>
  );
}

export default ProductCard;