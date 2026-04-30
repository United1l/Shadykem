import { NavLink, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Collections from './pages/Collections.jsx'
import About from './pages/About.jsx'

const navItems = [
  { path: '/', label: 'Home', end: true },
  { path: '/collections', label: 'Collections' },
  { path: '/about', label: 'About' },
]

function App() {
  return (
    <div className="app-shell">
      <header className="site-nav">
        <div className="brand">ShadyKem</div>
        <nav>
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              end={item.end}
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
