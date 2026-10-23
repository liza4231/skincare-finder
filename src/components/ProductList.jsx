import ProductCard from "./ProductCard";

function ProductList({
  products,
  searchTerm,
  allProducts,
  selectedBrand,
}) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.code}
          product={product}
          searchTerm={searchTerm}
          allProducts={allProducts}
          selectedBrand={selectedBrand}
        />
      ))}
    </div>
  );
}

export default ProductList;