import ProductCard from "./ProductCard";

function ProductList({ products }) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.code}
          product={product}
        />
      ))}
    </div>
  );
}

export default ProductList;