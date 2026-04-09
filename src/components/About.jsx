import { useEffect, useRef } from "react";
import "./About.css";

const TAGS = [
  "React.js",
  "TypeScript",
  "React Native",
  "Node.js",
  "Express.js",
  "PHP",
  "Laravel",
  "MySQL",
  "MongoDB",
  "REST APIs",
  "Metronic UI",
  "Git",
];

const TIMELINE = [
  {
    icon: "🎓",
    title: "Bachelor's in Computer Science",
    date: "2020 – 2024",
    desc: "Completed graduation with a strong foundation in software development, data structures, and building real-world applications.",
  },
  {
    icon: "🧑‍💻",
    title: "Software Developer Intern",
    date: "2025",
    desc: "Started my professional journey as an intern, working on real-world projects, learning industry practices, and contributing to frontend and backend development.",
  },
  {
    icon: "💼",
    title: "Associate Software Developer",
    date: "2025 – Present",
    desc: "Promoted to Associate Software Developer after 3 months. Working on scalable applications like Tibookk (invoice system) and Kalory (AI nutrition app), focusing on full-stack development, APIs, and performance optimization.",
  },
  {
    icon: "🚀",
    title: "Open to Growth Opportunities",
    date: "Present",
    desc: "Continuously learning and exploring opportunities to work on impactful products as a Full Stack / MERN Developer.",
  },
];

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const els =
      sectionRef.current?.querySelectorAll(
        ".reveal, .reveal-left, .reveal-right",
      ) || [];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="about-grid">
        {/* Left */}
        <div className="about-left reveal-left">
          <div className="avatar-wrap">
            <div className="avatar-ring" />
            <div className="avatar">👨‍💻</div>
          </div>
          <div className="tag-cloud">
            {TAGS.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="about-right reveal-right">
          <span className="section-label">01 — About Me</span>
          <h2 className="section-title">
            Turning ideas into <span>digital reality</span>
          </h2>
          <p className="about-para">
            I’m Kunal, a Full Stack Developer with hands-on experience building
            real-world web and mobile applications. I have worked on production
            projects like Tibookk (invoice & billing platform) and Kalory
            (AI-powered nutrition app), focusing on performance, scalability,
            and user experience.
          </p>

          <p className="about-para">
            My expertise includes React.js, React Native, Node.js, Laravel, and
            modern tools like TypeScript and Metronic UI. I enjoy building
            complete systems — from authentication and APIs to dashboards and
            payment integrations — with clean and maintainable code.
          </p>
          <div className="timeline">
            {TIMELINE.map((item, i) => (
              <div key={i} className="tl-item">
                <div className="tl-dot">{item.icon}</div>
                {i < TIMELINE.length - 1 && <div className="tl-line" />}
                <div className="tl-content">
                  <h4>{item.title}</h4>
                  <span className="tl-date">{item.date}</span>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
