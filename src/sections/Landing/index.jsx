import { Image } from "react-bootstrap";
import developer from "../../assets/developer.svg";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Container } from "react-bootstrap";
import { Name, Section, Title, Column, Links, Icon } from "../../components/styled-components/Page.styled";

const Landing = () => {
  return (
    <Section id="landing">
      <Container className="d-flex align-items-center py-md-5 p-0">
        <Column className="col-md-6 col-sm-12 text-center-sm">
          <Name>Dennis Duplon</Name>
          <Title>Web Developer</Title>
          <Links className="mt-3">
            <Icon href="https://github.com/coffee-sprinkler" target="_blank">
              <i className="bi bi-github"></i>
            </Icon>
            <Icon href="https://www.linkedin.com/in/denduplon/" target="_blank">
              <i className="bi bi-linkedin"></i>
            </Icon>
          </Links>
        </Column>
        <Column className="col-md-6 col-sm-12 d-md-block d-none">
          <Image src={developer} />
        </Column>
      </Container>
    </Section>
  );
};

export default Landing;
