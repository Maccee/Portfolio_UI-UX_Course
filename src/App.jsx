import React, { useEffect } from "react";
import "./App.css";
import logo from "./assets/logo.svg";
import HomeIcon from "./assets/HomeIcon";
import PortfolioIcon from "./assets/PortfolioIcon";
import SkillsIcon from "./assets/SkillsIcon";
import UserIcon from "./assets/UserIcon";

const App = () => {
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 220,
      behavior: "smooth",
    });
  };

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
    });
  };
  const scrollToFooter = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="pageWrapper">
        <header>
          <img src={logo} alt="logo" />
        </header>

        <hr />
        <nav className="navbar" id="navbar">
          <HomeIcon onClick={scrollToTop} />
          <PortfolioIcon onClick={() => scrollToSection("projects-section")} />
          <SkillsIcon onClick={() => scrollToSection("skills-section")} />
          <UserIcon onClick={() => scrollToFooter()} />
        </nav>

        <main id="home-section">
          <h1>Welcome to my Portfolio</h1>

          <p>
            This portfolio chronicles a journey through digital engineering,
            highlighting in-depth knowledge and expertise in programming. Each
            project presented offers a glimpse into the potential of digital
            technologies when used for transformative solutions. As visitors
            explore, they will see tangible applications of innovation and
            creativity in the realm of the digital domain.
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
          <h3>Stack</h3>
          <ul className="skillList">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>React</li>
            <li>JavaScript</li>
            <li>Node.js</li>
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
          <div className="license">
            <p className="author">Macce 2023</p>
            <p>
              This work is licensed under a
              <br />
              <a
                href="https://creativecommons.org/licenses/by-sa/4.0/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Creative Commons Attribution-ShareAlike 4.0 International
                License (CC BY-SA)
              </a>
              .
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default App;
