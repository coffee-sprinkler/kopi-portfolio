import styled from "styled-components";

const SkipNavLink = styled.a`
  width: 100%;
  text-align: center;
  padding-block: 0.5em;
  text-decoration: none;
  color: #fff;
  background-color: var(--a-primary-color);
  font-weight: 600;
  transition: 325ms;

  &:not(:focus):not(:focus-within) {
    position: absolute;
    height: 1px;
    margin-top: -1rem;
  }

  &:focus {
    display: block;
    background-color: var(--a-secondary-color);
    outline: var(--a-secondary-color);
  }
`;

export default SkipNavLink;
