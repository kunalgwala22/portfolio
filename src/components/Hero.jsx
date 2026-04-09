import { useEffect, useRef, useState } from 'react'
import './Hero.css'

const ROLES = [
  'Full Stack Developer',
  'React Developer',
  'Node.js Developer',
  'Laravel Developer',
  'Problem Solver',
]

function useTyping(words) {
  const [text,     setText]     = useState('')
  const [roleIdx,  setRoleIdx]  = useState(0)
  const [charIdx,  setCharIdx]  = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[roleIdx]
    let delay = deleting ? 55 : 105

    if (!deleting && charIdx === word.length) {
      delay = 1800
      const t = setTimeout(() => setDeleting(true), delay)
      return () => clearTimeout(t)
    }
    if (deleting && charIdx === 0) {
      setDeleting(false)
      setRoleIdx(i => (i + 1) % words.length)
      return
    }

    const t = setTimeout(() => {
      setText(word.slice(0, deleting ? charIdx - 1 : charIdx + 1))
      setCharIdx(i => i + (deleting ? -1 : 1))
    }, delay)
    return () => clearTimeout(t)
  }, [charIdx, deleting, roleIdx, words])

  return text
}

export default function Hero() {
  const canvasRef = useRef(null)
  const typed     = useTyping(ROLES)

  /* particles */
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let W, H, raf
    const pts = []

    const resize = () => {
      W = canvas.width  = window.innerWidth
      H = canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    for (let i = 0; i < 70; i++) {
      pts.push({
        x:  Math.random() * window.innerWidth,
        y:  Math.random() * window.innerHeight,
        r:  .8 + Math.random() * 1.5,
        vx: (Math.random() - .5) * .22,
        vy: (Math.random() - .5) * .22,
        a:  Math.random() * Math.PI * 2,
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy; p.a += .005
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0,212,255,${.12 + .08 * Math.sin(p.a)})`
        ctx.fill()
      })
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x
          const dy = pts[i].y - pts[j].y
          const d  = Math.sqrt(dx * dx + dy * dy)
          if (d < 120) {
            ctx.beginPath()
            ctx.moveTo(pts[i].x, pts[i].y)
            ctx.lineTo(pts[j].x, pts[j].y)
            ctx.strokeStyle = `rgba(0,212,255,${.07 * (1 - d / 120)})`
            ctx.lineWidth = .8
            ctx.stroke()
          }
        }
      }
      raf = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section id="hero" className="hero">
      {/* background orbs */}
      <div className="hero-bg">
        <div className="orb orb1" />
        <div className="orb orb2" />
        <div className="orb orb3" />
      </div>
      <canvas ref={canvasRef} className="particles-canvas" />

      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot" />
          Available for opportunities
        </div>

        <h1 className="hero-name">
          Hi, I'm <br />
          <span className="gradient-text">Kunal.</span>
        </h1>

        <div className="hero-roles">
          <span className="typed-text">{typed}</span>
          <span className="blink-cursor">|</span>
        </div>

        <p className="hero-desc">
          Full Stack Developer crafting end-to-end digital experiences. From
          pixel-perfect UIs to robust APIs — I build products that scale.
        </p>

        <div className="hero-ctas">
          <a href="#projects" className="btn-primary" onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior:'smooth' }) }}>
            🚀 View Projects
          </a>
          <a href="#contact" className="btn-outline" onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior:'smooth' }) }}>
            💬 Contact Me
          </a>
        </div>

        <div className="hero-stats">
          {[
            { num: '1+',  label: 'Years Experience' },
            { num: '10+', label: 'Projects Built'   },
            { num: '10+',  label: 'Technologies'     },
          ].map(s => (
            <div key={s.label} className="stat-item">
              <div className="stat-num">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-scroll">
        <span>scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}
