import { Button, Container, Form } from "react-bootstrap";
import { Column, Section, SectionName, Special } from "../../components/styled-components/Page.styled";
import "./Contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_fmfjb8c", "template_i2djtmr", form.current, "LByYYKBR11-7MsOMf").then(
      (result) => {
        console.log(result.text);
        e.target.reset();
        Swal.fire({
          toast: true,
          icon: "success",
          title: "Email sent!",
          position: "top-end",
          showConfirmButton: false,
          timer: 500,
          timerProgressBar: true,
          didClose: () => window.scrollTo({ top: 0, behavior: "smooth" }),
        });
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  return (
    <Section id="contact">
      <Container className="d-flex align-items-center">
        <Column className="col-md col-sm-12 col-lg-6">
          <Special>
            Hello! I would be delighted to hear from you. <br />
            Please feel free to drop me a message.
          </Special>
        </Column>
        <Column className="col-md col-sm-12 col-lg-6">
          <SectionName>Get in touch</SectionName>
          <Form ref={form} onSubmit={sendEmail} className="mt-lg-5 mt-md-3">
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Name" name="full_name" htmlFor="full_name" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="email" placeholder="Email" name="email" htmlFor="email" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control as="textarea" placeholder="Message" name="message" htmlFor="message" required rows="3" />
            </Form.Group>
            <Button type="submit">Send</Button>
          </Form>
        </Column>
      </Container>
    </Section>
  );
};

export default Contact;
