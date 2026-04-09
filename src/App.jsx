import { useState, useEffect, createContext, useContext } from 'react'
import Cursor       from './components/Cursor'
import Navbar       from './components/Navbar'
import Hero         from './components/Hero'
import About        from './components/About'
import Skills       from './components/Skills'
import Projects     from './components/Projects'
import Experience   from './components/Experience'
import Contact      from './components/Contact'
import Footer       from './components/Footer'
import ResumeFloat  from './components/ResumeFloat'

export const ThemeContext = createContext()

export default function App() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark')

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Cursor />
      <ResumeFloat />
      <Navbar />
      <main>
        <Hero />
        <div className="divider" />
        <About />
        <div className="divider" />
        <Skills />
        <div className="divider" />
        <Projects />
        <div className="divider" />
        <Experience />
        <div className="divider" />
        <Contact />
      </main>
      <Footer />
    </ThemeContext.Provider>
  )
}
