
import { useState } from 'react'
import './App.css'
import GetProducts from './components/GetProducts'
import Login from './components/Login'
import Cart from './components/Cart'
import Checkout from './components/Checkout'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState('')
  const [cartItems, setCartItems] = useState([])
  const [currentView, setCurrentView] = useState('products') // 'products', 'cart', 'checkout', 'confirmation'
  const [lastOrder, setLastOrder] = useState(null)

  const handleLogin = (username) => {
    setCurrentUser(username)
    setIsLoggedIn(true)
    setCurrentView('products')
  }

  const handleLogout = () => {
    setCurrentUser('')
    setIsLoggedIn(false)
    setCartItems([])
    setCurrentView('products')
  }

  const handleAddToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id)
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prevItems, { ...product, quantity: 1 }]
    })
    // Show a brief notification (you can enhance this with a toast)
    alert(`${product.title.substring(0, 30)}... added to cart!`)
  }

  const handleRemoveFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId))
  }

  const handleCheckout = () => {
    setCurrentView('checkout')
  }

  const handleConfirmOrder = (formData) => {
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
    setLastOrder({
      orderNumber: Math.random().toString(36).substring(7).toUpperCase(),
      items: cartItems,
      total: total,
      customerName: formData.firstName + ' ' + formData.lastName,
      email: formData.email,
      address: formData.address,
      timestamp: new Date().toLocaleDateString()
    })
    setCurrentView('confirmation')
  }

  const handleBackToProducts = () => {
    setCurrentView('products')
  }

  const handleNewOrder = () => {
    setCartItems([])
    setCurrentView('products')
  }

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />
  }

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className="app-root">
      <header className="app-header">
        <div className="header-inner">
          <h1 className="site-title">Simple Store</h1>
          <nav className="site-nav">
            <button 
              className="nav-link"
              onClick={() => setCurrentView('products')}
              style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            >
              Home
            </button>
            <button 
              className="nav-link"
              onClick={() => setCurrentView('products')}
              style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            >
              Products
            </button>
          </nav>
          <div className="user-section">
            {currentView !== 'checkout' && currentView !== 'confirmation' && (
              <button 
                className="cart-icon-btn" 
                onClick={() => setCurrentView('cart')}
                title="View cart"
              >
                🛒 Cart ({cartCount})
              </button>
            )}
            <span className="user-name">Welcome, {currentUser}</span>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </header>

      <main className="app-main">
        {currentView === 'products' && (
          <GetProducts onAddToCart={handleAddToCart} />
        )}

        {currentView === 'cart' && (
          <div className="cart-view-container">
            <button className="back-to-products" onClick={handleBackToProducts}>
              ← Continue Shopping
            </button>
            <Cart 
              items={cartItems} 
              onRemove={handleRemoveFromCart}
              onCheckout={handleCheckout}
            />
          </div>
        )}

        {currentView === 'checkout' && (
          <Checkout 
            items={cartItems}
            total={cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)}
            onConfirm={handleConfirmOrder}
            onCancel={() => setCurrentView('cart')}
          />
        )}

        {currentView === 'confirmation' && lastOrder && (
          <div className="confirmation-container">
            <div className="confirmation-card">
              <div className="confirmation-icon">✓</div>
              <h2>Order Confirmed!</h2>
              <p className="confirmation-message">Thank you for your purchase!</p>
              
              <div className="order-details">
                <div className="detail-row">
                  <span className="label">Order Number:</span>
                  <span className="value">{lastOrder.orderNumber}</span>
                </div>
                <div className="detail-row">
                  <span className="label">Customer:</span>
                  <span className="value">{lastOrder.customerName}</span>
                </div>
                <div className="detail-row">
                  <span className="label">Email:</span>
                  <span className="value">{lastOrder.email}</span>
                </div>
                <div className="detail-row">
                  <span className="label">Delivery Address:</span>
                  <span className="value">{lastOrder.address}</span>
                </div>
                <div className="detail-row">
                  <span className="label">Order Date:</span>
                  <span className="value">{lastOrder.timestamp}</span>
                </div>
              </div>

              <div className="items-summary">
                <h3>Items Ordered</h3>
                {lastOrder.items.map(item => (
                  <div key={item.id} className="item-row">
                    <span>{item.quantity}x {item.title.substring(0, 40)}...</span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>

              <div className="total-section">
                <span className="total-label">Total Amount:</span>
                <span className="total-amount">${lastOrder.total.toFixed(2)}</span>
              </div>

              <button className="continue-shopping-btn" onClick={handleNewOrder}>
                Continue Shopping
              </button>
            </div>
          </div>
        )}
      </main>

      <footer className="app-footer">
        <div className="footer-inner">
          <p>© {new Date().getFullYear()} Simple Store — Built with React</p>
        </div>
      </footer>
    </div>
  )
}

export default App
