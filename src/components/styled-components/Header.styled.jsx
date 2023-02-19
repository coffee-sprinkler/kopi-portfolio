import styled from "styled-components";

const HeaderWrapper = styled.header`
  font-family: var(--ff-secondary);
  font-weight: 600;
  font-size: 1.25em;
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 1020;
  display: flex;
  align-items: center;
`;

const Brand = styled.a`
  text-transform: uppercase;
  font-family: var(--ff-tertiary);
  font-size: 1.5em;
  text-decoration: none;
  color: var(--text-primary);

  &:hover {
    color: inherit;
  }

  @media (max-width: 1023px) {
    font-size: 1.25em;
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

const Hamburger = styled.button`
  display: none;

  @media (max-width: 26.625rem) {
    display: block;
    position: absolute;
    z-index: 9999;
    top: 0.5rem;
    right: 2rem;
    width: 2rem;
    aspect-ratio: 1/1;
    font-size: 2rem;
    outline: none;
    border: none;
    background-color: transparent;
  }
`;

export { HeaderWrapper, Brand, Hamburger };
