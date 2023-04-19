
import {useState} from "react";
import "./Modal.css";
import Modal from "./Modal";
import ContactForm from "./ContactForm";


// const Contact = () => {
//     return (
//         <div>
//             <h2>Test</h2>
//         </div>
//     );
// };

// function ContactModal() {
//     return <div className="container"> Modal Example</div>
// };

function Contact() {
    const [status, setStatus] = useState(false);

    return (
        <div className="container">
            <div className>
                <ContactForm />
            </div>
            {status && (
                <Modal close={() => setStatus(false)}>
                    <div className="container">
                        <p>Yayyyy, my first Modal!</p>
                    </div>
                </Modal>
            )}
            <button className="modal-btn" onClick={() => setStatus(true)}>Modal Button!</button>
        </div>
    )
};

export default Contact;