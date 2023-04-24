// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import "./ContactForm.css"

// function ContactForm() {
//   return (
//     <Form className="Form">
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Control className="mb-3" type="email" placeholder="Enter email:" />
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="Message">
//         <Form.Control className="mb-3" type="<Message" placeholder="Message:" />
//       </Form.Group>
      
//       <Button className="Submit-btn" variant="primary" type="submit">
//         Submit
//       </Button>
//     </Form>
//   );
// }

// export default ContactForm;

//Form downloaded from react bootsrap and edited to make specific. Havent used it before so it seemed a good place to do so. 

//I did the above before watching the uncontrolled input video (my bad). the above works but i have changed it to the below because it was easier to link to a pop=up showing the form input data. 

import {useRef} from "react";

const ContactForm = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();
        alert(
            "Name:" + nameRef.current.value +
            "\n" +
            "Email:" + emailRef.current.value +
            "\n" +
            "Message:" + messageRef.current.value

        );
    };

    return (
        <form onSubmit={submitHandler} className="Form">
            <div className="mb-3">
                <label htmlFor="name"></label>
                <input type="text" name="name" ref={nameRef} placeholder="Name:" className="mb-3" />
                
            </div>
            <div className="mb-3">
                <label htmlFor="email"></label>
                <input type="text" name="email" ref={emailRef} placeholder="Email:" className="mb-3"/>
                
            </div>
            <div className="mb-3">
                <label htmlFor="message"></label>
                <input type="text" name="message" ref={messageRef} placeholder="Message:" className="mb-3"/>
            </div> 
            <div>
                <input type="submit" value="Submit" className="Submit-btn" />
            </div>
        </form>
    );
};

export default ContactForm