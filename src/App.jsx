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
    const navmain = document.getElementById("navmain");
    const main = document.getElementById("home-section");
    const firstP = document.querySelector("#home-section p");

    let sticky = false; // to track the state

    const handleScroll = () => {
      // Check if it's mobile view
      if (window.innerWidth <= 600) {
        return; // exit the function early if mobile view
      }

      let scrolled = window.scrollY;

      // Check the position of the navbar
      if (window.scrollY >= navbar.offsetTop && !sticky) {
        // Change navbar styles
        navbar.style.flexDirection = "row";
        navbar.style.backgroundColor = "rgba(0,0,0,0.8)";
        navbar.style.height = "50px";
        main.style.textAlign = "center";
        main.style.width = "100%";
        firstP.style.textAlign = "center";
        // Remove flex from #navmain
        navmain.style.display = "block";
        sticky = true;
      } else if (window.scrollY < navbar.offsetTop && sticky) {
        // Revert navbar styles
        navbar.style.flexDirection = "column";
        navbar.style.height = "auto";
        navbar.style.backgroundColor = "transparent";
        main.style.textAlign = "left";
        main.style.width = "100%";
        firstP.style.textAlign = "left";
        // Add flex back to #navmain
        navmain.style.display = "flex";
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
      top: 300,
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

        <div id="navmain">
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
            <h1>Welcome to my Portfolio</h1>
            <h2>&lt;!-- Engineering Seamless Digital Solutions. --&gt;</h2>

            <p>
              I'm Marcus, an enthusiastic digital engineer driven by innovation
              and creativity. Despite being at the beginning of my professional
              journey, I possess a solid foundation in digital technologies and
              a fervent desire to revolutionize how businesses operate in the
              digital realm. My portfolio reflects my passion and dedication,
              showcasing projects that highlight my ability to create
              transformative digital solutions.
            </p>
            <p>I'm Marcus, an enthusiastic digital engineer driven by innovation
              and creativity. Despite being at the beginning of my professional
              journey, I possess a solid foundation in digital technologies and
              a fervent desire to revolutionize how businesses operate in the
              digital realm. My portfolio reflects my passion and dedication,
              showcasing projects that highlight my ability to create
              transformative digital solutions.</p>
              <p>I'm Marcus, an enthusiastic digital engineer driven by innovation
              and creativity. Despite being at the beginning of my professional
              journey, I possess a solid foundation in digital technologies and
              a fervent desire to revolutionize how businesses operate in the
              digital realm. My portfolio reflects my passion and dedication,
              showcasing projects that highlight my ability to create
              transformative digital solutions.</p>
              <p>I'm Marcus, an enthusiastic digital engineer driven by innovation
              and creativity. Despite being at the beginning of my professional
              journey, I possess a solid foundation in digital technologies and
              a fervent desire to revolutionize how businesses operate in the
              digital realm. My portfolio reflects my passion and dedication,
              showcasing projects that highlight my ability to create
              transformative digital solutions.</p>
          </main>
        </div>

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
