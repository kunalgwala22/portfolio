import { useState, useEffect } from 'react'
import './ResumeFloat.css'

export default function ResumeFloat() {
  const [visible, setVisible] = useState(false)
  const resumePath = '/kunal-gwala.pdf'

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <a
      className={`resume-float ${visible ? 'show' : ''}`}
      href={resumePath}
      download="Kunal-Resume.pdf"
      title="Download Resume"
      aria-label="Download Resume"
    >
      ⬇ Resume
    </a>
  )
}
