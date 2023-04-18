import {useState} from "react";
import Modal from "./Modal";

// const Contact = () => {
//     return (
//         <div>
//             <h2>Test</h2>
//         </div>
//     );
// };

function Contact() {
    const [status, setStatus] = useState(false);
    return (
        <div className="container">
            {status && (
                <Modal closer={() => setStatus(false)}>
                    <div className="container">
                        <p>This is a Modal!</p>
                    </div>
                </Modal>
            )}
            <button className="modal-btn" onClick={() => setStatus(true)}>Click me!</button>
        </div>
    )
};

export default Contact;