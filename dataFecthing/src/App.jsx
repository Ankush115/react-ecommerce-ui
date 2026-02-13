
import { useState } from 'react'
import './App.css'
import GetProducts from './components/GetProducts'
import Login from './components/Login'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState('')

  const handleLogin = (username) => {
    setCurrentUser(username)
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    setCurrentUser('')
    setIsLoggedIn(false)
  }

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />
  }

  return (
    <div className="app-root">
      <header className="app-header">
        <div className="header-inner">
          <h1 className="site-title">Simple Store</h1>
          <nav className="site-nav">
            <a href="#" className="nav-link">Home</a>
            <a href="#" className="nav-link">Products</a>
          </nav>
          <div className="user-section">
            <span className="user-name">Welcome, {currentUser}</span>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </header>

      <main className="app-main">
        <GetProducts />
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
