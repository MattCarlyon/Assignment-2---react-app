import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./ContactForm.css"

function ContactForm() {
  return (
    <Form className="Form">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control className="mb-3" type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="Message">
        <Form.Control className="mb-3" type="<Message" placeholder="Message" />
      </Form.Group>
      
      <Button className="Submit-btn" variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default ContactForm;

//check box removed