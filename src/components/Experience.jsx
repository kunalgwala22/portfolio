import { useEffect, useRef } from 'react'
import './Experience.css'

const EXPERIENCES = [
  {
    date: 'Apr 2025 – Sep 2025',
    title: 'Software Developer Intern',
    company: 'Dive (OPC) Global Private Limited — Vadodara, India',
    points: [
      'Worked on full-stack development projects using React.js and React Native',
      'Collaborated in Agile sprints and integrated REST APIs for scalable applications',
      'Improved UI/UX and contributed to performance optimization',
      'Developed and customized WordPress project (Meta Machinery) with responsive design',
    ],
  },
  {
    date: 'Sep 2025 – Present',
    title: 'Associate Software Developer',
    company: 'TIMSIT SOLUTION (TIMS) — Vadodara, India',
    points: [
      'Working on modern web and mobile applications using React.js, React Native, and TypeScript',
      'Building reusable UI components and contributing to production-level features',
      'Developing Tibookk (invoice & billing platform) with dynamic UI and client management',
      'Building Kalory (AI-powered nutrition app) with Google Fit and Apple Health integration',
    ],
  },
  {
    date: '2020 – 2024',
    title: 'Bachelor of Computer Science',
    company: 'Your College — Gujarat, India',
    points: [
      'Built multiple real-world projects including healthcare and e-commerce applications',
      'Learned core concepts of data structures, OOP, DBMS, and full-stack development',
      'Worked with technologies like PHP, WordPress, JavaScript, and MongoDB',
      'Developed strong problem-solving and practical development skills',
    ],
  },
]

export default function Experience() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('.reveal, .reveal-left') || []
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
    }, { threshold: .12 })
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <section id="experience" ref={sectionRef}>
      <div className="section-header reveal">
        <span className="section-label">04 — Experience</span>
        <h2 className="section-title">My <span>Journey</span></h2>
        <p className="section-sub">A timeline of roles and milestones that shaped who I am as a developer.</p>
      </div>

      <div className="exp-timeline">
        {EXPERIENCES.map((exp, i) => (
          <div
            key={i}
            className="exp-item reveal"
            style={{ transitionDelay: `${i * 0.15}s` }}
          >
            {/* left: date */}
            <div className="exp-date">{exp.date}</div>

            {/* center: dot + line */}
            <div className="exp-center">
              <div className="exp-dot" />
              {i < EXPERIENCES.length - 1 && <div className="exp-line" />}
            </div>

            {/* right: content */}
            <div className="exp-content glass">
              <h3 className="exp-title">{exp.title}</h3>
              <span className="exp-company">{exp.company}</span>
              <ul className="exp-list">
                {exp.points.map((pt, j) => (
                  <li key={j}>{pt}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
