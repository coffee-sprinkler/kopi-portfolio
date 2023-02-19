import { Container, Row } from "react-bootstrap";
import { Links, Icon, Special } from "./styled-components/Page.styled";

const Footer = () => {
  function getCurrentYear() {
    return new Date().getFullYear();
  }

  return (
    <footer>
      <Container className="pt-5 pb-3">
        <Row>
          <Special className="text-center">Find me in social media</Special>
          <Links className="mt-3 justify-content-center">
            <Icon href="https://github.com/coffee-sprinkler" target="_blank">
              <i className="bi bi-github"></i>
            </Icon>
            <Icon href="https://www.linkedin.com/in/denduplon/" target="_blank">
              <i className="bi bi-linkedin"></i>
            </Icon>
          </Links>
        </Row>
        <Row className="pt-3">
          <Special className="text-center">All Rights Reserved © {new Date().getFullYear()}</Special>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
