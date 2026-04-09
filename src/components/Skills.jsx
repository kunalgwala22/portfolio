import { useEffect, useRef, useState } from 'react'
import './Skills.css'
const CATEGORIES = [
  {
    icon: '🖥',
    label: 'cat-fe',
    title: 'Frontend',
    skills: [
      { name: 'React.js', pct: 90 },
      { name: 'React Native (Expo)', pct: 85 },
      { name: 'JavaScript (ES6+)', pct: 88 },
      { name: 'TypeScript', pct: 80 },
      { name: 'HTML5 / CSS3', pct: 92 },
      { name: 'Tailwind CSS', pct: 90 },
      { name: 'Bootstrap', pct: 85 },
      { name: 'Redux', pct: 80 },
      { name: 'Zustand', pct: 75 },
    ],
  },
  {
    icon: '⚙️',
    label: 'cat-be',
    title: 'Backend & Core',
    skills: [
      { name: 'Node.js', pct: 85 },
      { name: 'Express.js', pct: 85 },
      { name: 'PHP', pct: 80 },
      { name: 'Laravel', pct: 78 },
      { name: 'REST API Design', pct: 87 },
      { name: 'Socket.io', pct: 75 },
      { name: 'Core Java', pct: 70 },
      { name: 'OOP Concepts', pct: 85 },
    ],
  },
  {
    icon: '🗄',
    label: 'cat-db',
    title: 'Database & Tools',
    skills: [
      { name: 'MongoDB', pct: 85 },
      { name: 'MongoDB Atlas', pct: 80 },
      { name: 'MySQL', pct: 85 },
      { name: 'Git', pct: 90 },
      { name: 'GitHub', pct: 90 },
      { name: 'DBMS', pct: 80 },
    ],
  },
  {
    icon: '🌐',
    label: 'cat-other',
    title: 'CMS & Others',
    skills: [
      { name: 'WordPress', pct: 85 },
      { name: 'Theme Customization', pct: 80 },
      { name: 'Plugin Integration', pct: 80 },
      { name: 'Responsive Design', pct: 90 },
      { name: 'Performance Optimization', pct: 75 },
    ],
  },
]
function SkillBar({ name, pct, variant, active }) {
  return (
    <div className="skill-bar-item">
      <div className="skill-bar-top">
        <span className="skill-bar-name">{name}</span>
        <span className="skill-bar-pct">{pct}%</span>
      </div>
      <div className="skill-bar-track">
        <div
          className={`skill-bar-fill fill-${variant}`}
          style={{ width: active ? `${pct}%` : '0%' }}
        />
      </div>
    </div>
  )
}

function SkillCard({ cat, variant, delay }) {
  const ref = useRef(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setActive(true); io.disconnect() }
    }, { threshold: .3 })
    if (ref.current) io.observe(ref.current)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`skill-card glass reveal`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <h3 className="skill-card-title">
        <span className={`cat-icon ${cat.label}`}>{cat.icon}</span>
        {cat.title}
      </h3>
      {cat.skills.map(s => (
        <SkillBar key={s.name} name={s.name} pct={s.pct} variant={variant} active={active} />
      ))}
    </div>
  )
}

export default function Skills() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('.reveal') || []
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
    }, { threshold: .12 })
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  const variants = ['fe', 'be', 'db']

  return (
    <section id="skills" ref={sectionRef}>
      <div className="section-header reveal" style={{ textAlign: 'center' }}>
        <span className="section-label">02 — Skills</span>
        <h2 className="section-title">My <span>Tech Stack</span></h2>
        <p className="section-sub" style={{ margin: '0 auto' }}>
          Technologies I work with every day to build exceptional digital products.
        </p>
      </div>

      <div className="skills-grid">
        {CATEGORIES.map((cat, i) => (
          <SkillCard key={cat.title} cat={cat} variant={variants[i]} delay={i * 0.12} />
        ))}
      </div>
    </section>
  )
}
