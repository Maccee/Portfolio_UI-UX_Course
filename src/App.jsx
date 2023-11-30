import React, { useEffect } from "react";
import "./App.css";
import logo from "./assets/logo.svg";
import csharp from "./assets/csharp-icon.svg";
import dotnet from "./assets/dotnet-icon.svg";
import react from "./assets/react-icon.svg";
import javascript from "./assets/javascript-icon.svg";
import tensorflow from "./assets/tensorflow-icon.svg";
import python from "./assets/python-icon.svg";
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

    const handleResize = () => {
      setParallaxPosition();
    };

    setParallaxPosition();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize); 

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const navbar = document.getElementById("navbar");
    const initialOffsetTop = navbar.offsetTop; 
    let sticky = false;
    const handleScroll = () => {
      if (window.innerWidth <= 600) return;
      if (window.scrollY >= initialOffsetTop && !sticky) {
        navbar.style.backgroundColor = "rgba(34,34,35,0.8)";
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
      top: 210,
      behavior: "smooth",
    });
    const navbar = document.getElementById("navbar");
    navbar.style.backgroundColor = "transparent";
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
            highlighting in-depth knowledge and expertise in programming.
          </p>
          <br />
          <p>
            Each project presented offers a glimpse into the potential of
            digital technologies when used for transformative solutions.
          </p>
          <br />
          <p>
            As visitors explore, they will see tangible applications of
            innovation and creativity in the realm of the digital domain.
          </p>
        </main>

        <section id="projects-section">
          <h2>Featured Projects</h2>
          <div class="projects-grid">
            <div class="project-card">
              <h3>
                <a href="#">Responsive Web App</a>
              </h3>
              <p>
                Seamless UX across devices combining React's front-end with
                .NET's robustness.
              </p>
              <div class="tech-stack">
                <img src={react} alt="React" />
                <img src={dotnet} alt=".NET" />
              </div>
            </div>

            <div class="project-card">
              <h3>
                <a href="#">Dynamic Web Portal</a>
              </h3>
              <p>
                Designed for corporate communications with real-time content
                updates.
              </p>
              <div class="tech-stack">
                <img src={csharp} alt="C#" />
                <img src={dotnet} alt="ASP" />
              </div>
            </div>

            <div class="project-card">
              <h3>
                <a href="#">E-commerce Platform</a>
              </h3>
              <p>
                A scalable solution for online sales, integrated with popular
                payment gateways and inventory management.
              </p>
              <div class="tech-stack">
                <img src={javascript} alt="JavaScript" />
              </div>
            </div>

            <div class="project-card">
              <h3>
                <a href="#">AI Chatbot System</a>
              </h3>
              <p>
                Integrates with websites and apps to provide real-time customer
                support using advanced machine learning.
              </p>
              <div class="tech-stack">
                <img src={python} alt="Python" />
                <img src={tensorflow} alt="TensorFlow" />
              </div>
            </div>
          </div>
        </section>

        <section id="skills-section">
          <h2>Stack</h2>
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
          <h2>Contact</h2>
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
