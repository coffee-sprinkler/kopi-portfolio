import SkipNavLink from "./styled-components/SkipNavLink.styled";
import { HeaderWrapper, Brand, Hamburger } from "./styled-components/Header.styled";
import { Nav, Container } from "react-bootstrap";
import { useState, useRef } from "react";
import "./Header.css";

const Header = () => {
  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.history.replaceState(null, document.title, window.location.pathname + window.location.search);
  };

  const [isExpanded, setIsExpanded] = useState(false);
  const primaryNavRef = useRef(null);
  const mobileNavTogglerRef = useRef(null);

  function toggleHamburger() {
    const primaryNav = primaryNavRef.current;
    const mobileNavToggler = mobileNavTogglerRef.current;

    let visible = primaryNav.getAttribute("data-visible") === "false" ? "true" : "false";
    let expand = mobileNavToggler.getAttribute("aria-expanded") === "false" ? "true" : "false";

    mobileNavToggler.setAttribute("aria-expanded", expand);
    primaryNav.setAttribute("data-visible", visible);
    setIsExpanded(!isExpanded);
  }

  function handleNavClick() {
    const primaryNav = primaryNavRef.current;
    const mobileNavToggler = mobileNavTogglerRef.current;

    primaryNav.setAttribute("data-visible", "false");
    mobileNavToggler.setAttribute("aria-expanded", "false");
    setIsExpanded(false);
  }

  return (
    <>
      <SkipNavLink aria-label="skip to main content" href="#main-content">
        Skip to Content
      </SkipNavLink>
      <HeaderWrapper>
        <Container>
          <Brand href="#" onClick={(e) => handleScrollToTop(e)}>
            Coffee Sprinkler
          </Brand>
          <Hamburger onClick={toggleHamburger} aria-label="hamburger menu" aria-controls="primary-nav" aria-expanded={isExpanded} ref={mobileNavTogglerRef}>
            {isExpanded ? <i className="bi bi-x-lg"></i> : <i className="bi bi-list"></i>}
          </Hamburger>
          <nav>
            <Nav as="ul" ref={primaryNavRef} data-visible="false" id="primary-nav">
              <Nav.Item as="li">
                <Nav.Link onClick={handleNavClick} href="#about">
                  About
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link onClick={handleNavClick} href="#skills">
                  Skills
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link onClick={handleNavClick} href="#experience">
                  Experience
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link onClick={handleNavClick} href="#contact">
                  Contact
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </nav>
        </Container>
      </HeaderWrapper>
    </>
  );
};

export default Header;
