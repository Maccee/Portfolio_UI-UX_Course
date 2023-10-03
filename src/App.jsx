import React, { useEffect } from "react";
import "./App.css";
import logo from "./assets/logo.svg";
import home from "./assets/home.svg";
import portfolioIcon from "./assets/portfolio.svg";
import user from "./assets/user.svg";
import skill from "./assets/skill.svg";

function App() {
  useEffect(() => {
    const setParallaxPosition = () => {
      let scrolled = window.scrollY;
      const bgHeight = window.innerHeight * 1.1;
      const maxScroll = bgHeight - window.innerHeight;
      const parallaxAmount = (scrolled / window.innerHeight) * maxScroll;
      document.body.style.setProperty("--scroll-amount", `${parallaxAmount}px`);
    };

    const handleScroll = () => {
      setParallaxPosition();
    };

    // Initialize the parallax position on mount
    setParallaxPosition();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const navbar = document.getElementById("navbar");
    const initialOffsetTop = navbar.offsetTop; // Store the initial offset value
    let sticky = false;
    const handleScroll = () => {
      if (window.innerWidth <= 600) return;
      if (window.scrollY >= initialOffsetTop && !sticky) {
        navbar.style.backgroundColor = "rgba(0,0,0,0.8)";
        sticky = true;
      } else if (window.scrollY < initialOffsetTop && sticky) {
        navbar.style.backgroundColor = "transparent";
        sticky = false;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 230,
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
        </header>

        <hr />
        <nav className="navbar" id="navbar">
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

        <main id="home-section">
          <h1>&lt;!-- Welcome to my Portfolio --&gt;</h1>

          <p>
            I'm Marcus, an enthusiastic digital engineer driven by innovation
            and creativity. Despite being at the beginning of my professional
            journey, I possess a solid foundation in digital technologies and a
            fervent desire to revolutionize how businesses operate in the
            digital realm. My portfolio reflects my passion and dedication,
            showcasing projects that highlight my ability to create
            transformative digital solutions.
          </p>
        </main>

        <section id="projects-section">
          <h3>Featured Projects</h3>
          <ul>
            <li>
              <a href="#">
                A responsive web application built with React and .NET.
              </a>
              <p>
                This application offers a seamless user experience across
                devices, utilizing the power of React's front-end capabilities
                combined with the robustness of the .NET framework.
              </p>
            </li>
            <li>
              <a href="#">A dynamic web portal using C# and ASP.</a>
              <p>
                Designed for corporate communications, this portal supports
                real-time content updates and is built upon the reliability of
                C# and ASP's platform.
              </p>
            </li>
            <li>
              <a href="#">
                An e-commerce site with advanced CI/CD integration.
              </a>
              <p>
                Ensuring smooth user transactions, this e-commerce site boasts
                of modern checkout processes. The integrated CI/CD pipelines
                make site updates efficient and error-free.
              </p>
            </li>
            <li>
              <a href="#">A data visualization dashboard using SQL and JS.</a>
              <p>
                Transforming complex data into visual stories, this dashboard
                leverages SQL for data management and JavaScript for interactive
                visualization, offering insights at a glance.
              </p>
            </li>
          </ul>
        </section>

        <section id="skills-section">
          <h3>Skills</h3>
          <ul className="skillList">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>React</li>
            <li>JavaScript</li>

            <li>C#</li>
            <li>.NET</li>
            <li>Azure</li>
            <li>SQL</li>
            <li>UI/UX</li>
            <li>CI/CD</li>
            <li>Agile Methodologies</li>
          </ul>
        </section>
        <section className="contact">
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
        </section>
      </div>
    </>
  );
}

export default App;
