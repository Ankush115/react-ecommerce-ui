import React from "react";
import "./Home.css";

function Home({ userName, onShopNow, cartCount }) {
  const features = [
    {
      icon: "🚚",
      title: "Fast Delivery",
      description: "Get your orders delivered quickly to your doorstep"
    },
    {
      icon: "🛡️",
      title: "Secure Payment",
      description: "Safe and secure payment methods for your peace of mind"
    },
    {
      icon: "⭐",
      title: "Quality Products",
      description: "Curated collection of high-quality items"
    },
    {
      icon: "💬",
      title: "24/7 Support",
      description: "Dedicated customer support team ready to help"
    }
  ];

  const categories = [
    { id: 1, name: "Electronics", emoji: "📱" },
    { id: 2, name: "Clothing", emoji: "👕" },
    { id: 3, name: "Books", emoji: "📚" },
    { id: 4, name: "Jewelry", emoji: "💎" }
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Simple Store, Ankush! 👋</h1>
          <p className="hero-subtitle">
            Discover our amazing collection of quality products at unbeatable prices
          </p>
          <button className="shop-now-btn" onClick={onShopNow}>
            Shop Now
          </button>
        </div>
        <div className="hero-bg">
          <div className="hero-decoration"></div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <h2 className="section-title">Shop by Category</h2>
        <div className="categories-grid">
          {categories.map((category) => (
            <div key={category.id} className="category-card">
              <div className="category-emoji">{category.emoji}</div>
              <p className="category-name">{category.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2 className="section-title">Why Shop With Us</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <h2 className="section-title">By The Numbers</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number">10K+</div>
            <div className="stat-label">Products</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">50K+</div>
            <div className="stat-label">Happy Customers</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">100+</div>
            <div className="stat-label">Countries</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Customer Support</div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Start Shopping?</h2>
          <p>Browse our extensive catalog and find exactly what you need</p>
          <button className="cta-btn" onClick={onShopNow}>
            Explore Products →
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;
