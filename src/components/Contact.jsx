import { useEffect, useRef, useState } from 'react'
import './Contact.css'

const LINKS = [
  { icon: '📧', bgClass: 'cl-email', label: 'Email',    value: 'kunalgwala8696@gmail.com',          href: 'mailto:kunalgwala8696@email.com' },
  { icon: '⎇',  bgClass: 'cl-gh',   label: 'GitHub',   value: 'github.com/kunal-gwala',    href: 'https://github.com/' },
  { icon: '💼', bgClass: 'cl-li',   label: 'LinkedIn', value: 'linkedin.com/in/kunal-gwala-306315278', href: 'https://linkedin.com/' },
]

export default function Contact() {
  const sectionRef = useRef(null)
  const [status,  setStatus]  = useState('idle') // idle | sending | sent
  const [form,    setForm]    = useState({ firstName:'', lastName:'', email:'', subject:'', message:'' })

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right') || []
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
    }, { threshold: .12 })
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => {
      setStatus('sent')
      setForm({ firstName:'', lastName:'', email:'', subject:'', message:'' })
      setTimeout(() => setStatus('idle'), 4000)
    }, 1200)
  }

  return (
    <section id="contact" style={{ background: 'var(--bg2)' }} ref={sectionRef}>
      <div className="contact-grid">

        {/* ── LEFT INFO ── */}
        <div className="contact-info reveal-left">
          <span className="section-label">05 — Contact</span>
          <h2 className="section-title">Let's <span>Connect</span></h2>
          <p className="contact-desc">
            Have a project in mind or looking to hire a full stack developer? I'd love to hear from you. Let's build something amazing together.
          </p>

          <div className="contact-links">
            {LINKS.map(l => (
              <a key={l.label} href={l.href} className="contact-link" target={l.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                <div className={`cl-icon ${l.bgClass}`}>{l.icon}</div>
                <div className="cl-text">
                  <span className="cl-label">{l.label}</span>
                  <span className="cl-value">{l.value}</span>
                </div>
                <span className="cl-arrow">→</span>
              </a>
            ))}
          </div>
        </div>

        {/* ── RIGHT FORM ── */}
        <form className="contact-form glass reveal-right" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>First Name</label>
              <input name="firstName" value={form.firstName} onChange={handleChange} placeholder="John" required />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Doe" />
            </div>
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="john@example.com" required />
          </div>

          <div className="form-group">
            <label>Subject</label>
            <input name="subject" value={form.subject} onChange={handleChange} placeholder="Project collaboration" />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell me about your project..." />
          </div>

          <button
            type="submit"
            className={`btn-primary submit-btn ${status}`}
            disabled={status === 'sending'}
          >
            {status === 'idle'    && '🚀 Send Message'}
            {status === 'sending' && <><span className="spinner" /> Sending…</>}
            {status === 'sent'    && '✅ Message Sent!'}
          </button>
        </form>

      </div>
    </section>
  )
}
