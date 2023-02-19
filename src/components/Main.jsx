import { useState, useEffect } from "react";
import smoothscroll from "smoothscroll-polyfill";
import Landing from "../sections/Landing";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Experience from "../sections/Experience";
import Contact from "../sections/Contact";
import ScrollToTopButton from "./ScrollToTop";

const Main = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.querySelector("#about");
      if (aboutSection) {
        const aboutSectionTop = aboutSection.offsetTop;
        const aboutSectionHeight = aboutSection.offsetHeight;
        const aboutSectionBottom = aboutSectionTop + aboutSectionHeight;
        const currentScrollPosition = window.pageYOffset + window.innerHeight;
        setShowScrollButton(currentScrollPosition > aboutSectionBottom);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    smoothscroll.polyfill();
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.history.replaceState(null, document.title, window.location.pathname + window.location.search);
  };

  return (
    <main id="main-content">
      <Landing />
      <About />
      <Skills />
      <Experience />
      <Contact />
      <ScrollToTopButton show={showScrollButton} onClick={handleScrollToTop} />
    </main>
  );
};

export default Main;
