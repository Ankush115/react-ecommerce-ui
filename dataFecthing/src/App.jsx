
import './App.css'
import GetProducts from './components/GetProducts'

function App() {
  return (
    <div className="app-root">
      <header className="app-header">
        <div className="header-inner">
          <h1 className="site-title">Simple Store</h1>
          <nav className="site-nav">
            <a href="#" className="nav-link">Home</a>
            <a href="#" className="nav-link">Products</a>
          </nav>
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
