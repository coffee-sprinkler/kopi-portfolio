import about from "../../assets/about.svg";
import { Container, Image } from "react-bootstrap";
import { Section, Column, SectionName, Description } from "../../components/styled-components/Page.styled";

const About = () => {
  return (
    <Section id="about">
      <Container className="d-flex align-items-center py-0 py-md-5">
        <Column order={2} className="col-md-6 col-sm-12">
          <Image src={about} />
        </Column>
        <Column order={1} className="col-md-6 col-sm-12">
          <SectionName>About Me</SectionName>
          <Description>As a technology enthusiast and web developer with proficiency in JavaScript, I thrive on continuous learning, embrace new technologies, and enjoy tackling intricate projects with creative problem-solving skills.</Description>
        </Column>
      </Container>
    </Section>
  );
};

export default About;
