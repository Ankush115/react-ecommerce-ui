import React, { useState, useEffect } from "react";
import axios from "axios";
import "./GetProducts.css";

function GetProducts({ onAddToCart }) {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const getProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    } catch (err) {
      setError("Failed to fetch products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleAddToCart = (product) => {
    onAddToCart(product);
  };

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <section className="products-section">
      <h1 className="products-title">Our Products</h1>
      <div className="products-grid">
        {products.map((product) => (
          <article className="product-card" key={product.id}>
            <div className="product-image">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="product-body">
              <h2 className="product-title">{product.title}</h2>
              <p className="product-desc">{product.description}</p>
              <div className="product-footer">
                <div className="product-meta">
                  <span className="product-price">${product.price.toFixed(2)}</span>
                  <span className="product-rating">★ {product.rating.rate}</span>
                  <span className="product-reviews">({product.rating.count})</span>
                </div>
                <button 
                  className="buy-btn" 
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default GetProducts;
