import { useState, useEffect, useContext } from 'react'
import { ThemeContext } from '../App'
import './Navbar.css'

const links = ['About','Skills','Projects','Experience','Contact']

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = id => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        Kunal Gwala
      </div>

      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {links.map(l => (
          <button key={l} className="nav-link" onClick={() => scrollTo(l)}>{l}</button>
        ))}
      </div>

      <div className="nav-actions">
        <button className="theme-btn" onClick={toggleTheme} title="Toggle theme">
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
        <button className="hamburger" onClick={() => setMenuOpen(o => !o)}>
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  )
}
