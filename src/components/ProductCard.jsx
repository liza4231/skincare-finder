function ProductCard({ product }) {
  return (
    <div className="product-card">
      {product.image_front_url && (
        <img
          src={product.image_front_url}
          alt={product.product_name || "Skincare product"}
        />
      )}

      <h2>{product.product_name || "Unknown Product"}</h2>

      <p>Brand: {product.brands || "Unknown Brand"}</p>

      <p>
        Ingredients:{" "}
        {product.ingredients_text || "Ingredients not available"}
      </p>
    </div>
  );
}

export default ProductCard;