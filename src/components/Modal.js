import { MdClose } from "react-icons/md";

const Modal = ({ children, close }) => {
    return (
        <div className="Overlay">
            <div className="content">
                <MdClose classname="close" onClick={close} />
                {children}
            </div>
        </div>
    );
};

export default Modal;
