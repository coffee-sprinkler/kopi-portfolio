import styled, { keyframes } from "styled-components";

const Section = styled.section`
  padding-block-start: 2rem;
  @media (max-width: 1025px) {
    height: calc(100vh - 86px);
    display: grid;
    place-content: center;
  }
  @media (max-width: 769px) {
    ${(props) =>
      props.id === "landing" &&
      `
    height: calc(100vh - 77.25px);
  `}
  }

  @media (max-width: 426px) {
    ${(props) =>
      props.id === "landing" &&
      `
    height: calc(100vh - 60px);
  `}

    margin-block: 0;
    & > .container {
      display: grid !important;
      gap: 2rem;
    }

    ${(props) =>
      props.id === "skills" &&
      `
      & > .container {
        gap: 0.5rem ;
      }
    `}
  }
`;

const Column = styled.div`
  @media (max-width: 426px) {
    order: ${(props) => props.order};

    &[order="1"] {
      display: grid;
      gap: 1rem;
    }

    &[order="2"] {
      padding-block: 1.5rem;
      & > img {
        margin-inline: auto;
      }
    }
  }
`;

const Links = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 769px) {
  }

  @media (max-width: 426px) {
    justify-content: center;
  }
`;

const Icon = styled.a`
  color: var(--text-primary);
  transition: all 325ms ease-in;

  & > i {
    font-size: 1.5rem;
  }

  &:hover {
    color: var(--a-primary-color);
    scale: 150%;
  }
`;

const Name = styled.h1`
  font-family: var(--ff-tertiary);
  font-size: 4rem;

  @media (max-width: 769px) {
    font-size: 3rem;
  }

  @media (max-width: 426px) {
    font-size: 2.5rem;
  }
`;

const SectionName = styled.h2`
  font-family: var(--ff-tertiary);
  font-size: 3rem;

  @media (max-width: 769px) {
    font-size: 2rem;
  }

  @media (max-width: 426px) {
    font-size: 1.75rem;
  }
`;

const Description = styled.p`
  font-size: 1.5rem;

  @media (max-width: 769px) {
    font-size: 1.35rem;
  }

  @media (max-width: 426px) {
    font-size: 1.25rem;
  }
`;

const Title = styled.span`
  font-family: var(--ff-secondary);
  font-size: 2rem;
  @media (max-width: 426px) {
    font-size: 1.5rem;
  }
`;

const Skillset = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3em 1.5em;
  padding-block: 3rem;

  @media (max-width: 426px) {
    grid-template-columns: repeat(3, 1fr);
    padding-block: 1em;
  }
`;

const Skill = styled.div`
  text-align: center;

  @media (max-width: 426px) {
    & > img {
      width: 2.5rem;
      aspect-ratio: 1/1;
    }
  }
`;

const SkillName = styled.p`
  font-size: 1.5rem;
  margin-block: 0.5rem 0;

  @media (max-width: 769px) {
    margin-block: 1rem 0;
    font-size: 1.35rem;
  }
  @media (max-width: 426px) {
    font-size: 1rem;
    margin-block: 1rem 0;
  }
`;

const Exp = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2em 1em;

  @media (max-width: 426px) {
    grid-template-columns: 1fr;
  }
`;

const Work = styled.div`
  padding-block: 1em;
  padding-inline-start: 1em;
  border-radius: 1rem;

  &:before {
    content: "${(props) => props.before}";
    font-size: 2em;
    margin-inline-end: 0.5em;
  }

  @media (max-width: 769px) {
    &:before {
      font-size: 1.75em;
    }
  }

  @media (max-width: 426px) {
    &:before {
      font-size: 1.5em;
    }
  }
`;

const WorkTitle = styled.h3`
  font-size: 2em;
  font-family: var(--ff-secondary);

  & + span {
    font-size: 1.5em;
  }

  @media (max-width: 769px) {
    font-size: 1.75em;

    & + span {
      font-size: 1.25em;
    }
  }

  @media (max-width: 426px) {
    font-size: 1.5em;

    & + span {
      font-size: 1em;
    }
  }
`;

const WorkToggle = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  text-align: left;
`;

const Impact = styled.ul`
  display: none;
  font-size: 1.5em;
  margin-block-start: 1em;
  list-style-type: "✅";
  list-style-position: inside;
  padding-left: 0;

  li::before {
    content: "";
    margin-right: 0.25em;
  }

  &[data-visible="true"] {
    display: block;
  }

  @media (max-width: 769px) {
    font-size: 1.25em;
  }

  @media (max-width: 426px) {
    font-size: 1em;
  }
`;

const Special = styled.span`
  font-size: 2em;

  @media (max-width: 769px) {
    font-size: 1.625em;
  }

  @media (max-width: 426px) {
    font-size: 1.25em;
  }
`;

export { Section, Column, Name, SectionName, Title, Description, Links, Icon, Skillset, Skill, SkillName, Exp, Work, WorkTitle, WorkToggle, Impact, Special };
