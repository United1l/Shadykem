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
    <div className="relative min-h-screen overflow-hidden bg-[#050a08]/20">
      <div className="absolute inset-0 -z-10 bg-[#050a08]/60" />

      <header className="sticky top-0 z-50 flex items-center justify-between gap-6 bg-[#0c100d]/80 border-b border-[#d4b86f]/20 px-8 py-6 backdrop-blur-sm">
        <div className="text-emerald text-[1.55rem] font-bold tracking-[0.08em]">
          ShadyKem
        </div>

        <nav className="flex gap-10">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              end={item.end}
              className={({ isActive }) =>
                `text-[#f2d070] text-sm font-semibold tracking-[0.12em] uppercase transition-colors ${
                  isActive ? 'text-[#ffe49d]' : ''
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main className="relative z-10 px-8 py-8">
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
