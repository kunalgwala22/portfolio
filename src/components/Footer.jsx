import './Footer.css'

const SOCIALS = [
  { icon: '⎇', label: 'GitHub',   href: 'https://github.com/' },
  { icon: '💼', label: 'LinkedIn', href: 'https://linkedin.com/' },
  { icon: '𝕏',  label: 'Twitter',  href: 'https://twitter.com/' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <button
        className="footer-logo"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
       kunal gwala
      </button>

      <p className="footer-copy">
        © {new Date().getFullYear()} Your Name · Crafted with ❤️ and lots of ☕
      </p>

      <div className="footer-socials">
        {SOCIALS.map(s => (
          <a key={s.label} href={s.href} className="social-btn" title={s.label} target="_blank" rel="noreferrer">
            {s.icon}
          </a>
        ))}
      </div>
    </footer>
  )
}
