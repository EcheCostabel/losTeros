import emailjs from "@emailjs/browser";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import Form from "react-bootstrap/Form";
import "./contact.css";

export default function Contact() {
  const sendEmail = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_reug8pl",
        "template_qkzjtsw",
        event.target,
        "GPTmzfrrOtNzq13iZ"
      )
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <div className="contactForm">
      <OverlayTrigger
        trigger="click"
        key={"left"}
        placement={"left"}
        overlay={
          <Popover className="contact">
            <Popover.Header as="h3">{`Contact`}</Popover.Header>
            <Popover.Body>
              <Form onSubmit={sendEmail}>
                <Form.Group>
                  <Form.Label>Nombre y apellido</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingresa tu nombre"
                    name="user_name"
                  ></Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Mail</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Ingresa tu email"
                    name="user_email"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Mensaje</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Mensaje"
                    name="user_message"
                  ></Form.Control>
                </Form.Group>
                <div className="button">
                  <Button variant="primary" type="submit">
                    Enviar
                  </Button>
                </div>
              </Form>
            </Popover.Body>
          </Popover>
        }
      >
        <Button variant="secondary">Contact </Button>
      </OverlayTrigger>
    </div>
  );
}
