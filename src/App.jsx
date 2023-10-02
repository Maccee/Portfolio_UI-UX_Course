import React, { useEffect } from "react";
import "./App.css";
import logo from "./assets/logo.svg";
import home from "./assets/home.svg";
import portfolioIcon from "./assets/portfolio.svg";
import user from "./assets/user.svg";
import skill from "./assets/skill.svg";

function App() {
  useEffect(() => {
    const handleScroll = () => {
      let scrolled = window.scrollY;
      const bgHeight = window.innerHeight * 1.5;
      const maxScroll = bgHeight - window.innerHeight;
      const parallaxAmount = (scrolled / window.innerHeight) * maxScroll;
      document.body.style.setProperty("--scroll-amount", `${parallaxAmount}px`);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
    });
  }
  function scrollToFooter() {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  }

  return (
    <>
      <div className="pageWrapper">
        <header>
          <img src={logo} alt="logo" />
          <nav className="navbar">
            <img src={home} alt="Home Icon" onClick={scrollToTop} />
            <img
              src={portfolioIcon}
              alt="Portfolio Icon"
              onClick={() => scrollToSection("projects-section")}
            />
            <img
              src={skill}
              alt="Skill Icon"
              onClick={() => scrollToSection("skills-section")}
            />
            <img src={user} alt="User Icon" onClick={() => scrollToFooter()} />
          </nav>
        </header>
        <main id="home-section">
          <h1>Welcome to my Portfolio</h1>
          <h2>Engineering Seamless Digital Solutions.</h2>
    <p>
        Educated at Helsinki Business College, I've refined my skills to fulfill my lifelong passion for technology. My journey in the world of tech is a testament to my love for innovation and the drive to solve complex problems.
    </p>
    <hr/>
    <p>
        Dive deep into my technical endeavors, from innovative coding projects to the latest in software development trends. With my honed problem-solving skills, let's collaborate and redefine the tech frontier!
    </p>
</main>
        <section id="projects-section">
          <h3>Featured Projects</h3>
          <ul>
            <li>
              <a href="#">
                A responsive web application built with React and .NET.
              </a>
            </li>
            <li>
              <a href="#">A dynamic web portal using C# and ASP.</a>
            </li>
            <li>
              <a href="#">
                An e-commerce site with advanced CI/CD integration.
              </a>
            </li>
            <li>
              <a href="#">A data visualization dashboard using SQL and JS.</a>
            </li>
          </ul>
        </section>
        <section id="skills-section">
          <h3>Skills</h3>
          <ul className="skillList">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>C#</li>
            <li>.NET</li>
            <li>Azure</li>
            <li>SQL</li>
            <li>UI/UX</li>
            <li>CI/CD</li>
            <li>Agile Methodologies</li>
          </ul>
        </section>
        <footer>
          <h3>Contact</h3>
          <p>
            Email: <a href="mailto:macce@example.com">macce@example.com</a>
          </p>
          <p>Phone: +123-456-7890</p>
          <div className="socialMedia">
            <a href="#" aria-label="Twitter Profile">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" aria-label="LinkedIn Profile">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" aria-label="GitHub Repository">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
