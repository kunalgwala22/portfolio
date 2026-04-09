import { useEffect, useRef, useState } from 'react'
import './Projects.css'

const PROJECTS = [
  {
    emoji: '🧾',
    thumbClass: 'thumb-shop',
    name: 'Tibookk – Invoice & Billing Platform',
    desc: 'Developed a modern invoice and billing platform with client management and dynamic invoice creation. Built scalable UI using Metronic and implemented core billing logic for real-world business use cases.',
    stack: [
      'React.js',
      'TypeScript',
      'Metronic UI',
      'REST APIs'
    ],
    demo: 'https://tibook.in/',
    github: '#',
  },
  {
    emoji: '🥗',
    thumbClass: 'thumb-health',
    name: 'Kalory – AI Powered Nutrition App',
    desc: 'Built a mobile-first AI-powered nutrition tracking application using React Native. Integrated Google Fit and Apple Health for real-time health data sync and developed AI-based food recognition and analytics dashboard.',
    stack: [
      'React Native',
      'Expo',
      'AI Integration',
      'Health APIs',
      'JavaScript'
    ],
    demo: 'https://mykalory.com/',
    github: '#',
  },
  {
    emoji: '🏥',
    thumbClass: 'thumb-health',
    name: 'Doctor Appointment Booking System',
    desc: 'Created a full-stack healthcare platform with secure authentication, doctor availability management, appointment booking & cancellation, and admin dashboard. Integrated Razorpay for online payments.',
    stack: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Tailwind CSS',
      'Razorpay'
    ],
    demo: '#',
    github: '#',
  },
  {
    emoji: '🤖',
    thumbClass: 'thumb-tech',
    name: 'Obstacle Avoidance & Line Following Robot',
    desc: 'Developed an Arduino-based autonomous robot capable of line following and obstacle avoidance using IR sensors. Implemented embedded C logic for real-time navigation and decision making.',
    stack: [
      'Arduino',
      'Embedded C',
      'IR Sensors',
      'Robotics'
    ],
    demo: '#',
    github: '#',
  },
  {
    emoji: '🌐',
    thumbClass: 'thumb-web',
    name: 'Meta Machinery – WordPress Website',
    desc: 'Designed and developed a responsive business website using WordPress. Customized themes, integrated plugins, and optimized UI for better user experience and performance.',
    stack: [
      'WordPress',
      'PHP',
      'HTML',
      'CSS',
      'JavaScript'
    ],
    demo: 'https://mitamachinery.com/',
    github: '#',
  },
]
function ProjectCard({ p, delay }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className={`project-card reveal`}
      style={{ transitionDelay: `${delay}s` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={`project-thumb ${p.thumbClass}`}>
        <span className={`proj-emoji ${hovered ? 'hovered' : ''}`}>{p.emoji}</span>
        <div className="thumb-overlay" />
      </div>
      <div className="project-body">
        <h3 className="project-name">{p.name}</h3>
        <p className="project-desc">{p.desc}</p>
        <div className="project-stack">
          {p.stack.map(s => <span key={s} className="stack-pill">{s}</span>)}
        </div>
        <div className="project-links">
          <a href={p.demo} className="proj-link-demo">🔗 Live Demo</a>
          <a href={p.github} className="proj-link-gh">⎇ GitHub</a>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('.reveal') || []
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
    }, { threshold: .12 })
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <section id="projects" style={{ background: 'var(--bg2)' }} ref={sectionRef}>
      <div className="section-header reveal" style={{ textAlign: 'center' }}>
        <span className="section-label">03 — Projects</span>
        <h2 className="section-title">Featured <span>Work</span></h2>
        <p className="section-sub" style={{ margin: '0 auto' }}>
          Real-world applications built with modern technologies and shipped to production.
        </p>
      </div>

      <div className="projects-grid">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.name} p={p} delay={i * 0.1} />
        ))}
      </div>
    </section>
  )
}
