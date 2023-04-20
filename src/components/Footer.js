import {Link} from "react-router-dom";
import "./Footer.css";

const Footer = () => {
    return (
        <header className="Footer">
            <nav>
                <ul>
                    <Link className="footerlink" to="/Contact">Tel:012345678</Link>
                    <Link className="footerlink" to="/Contact">Email:email@email.com</Link>
                </ul>
            </nav>
        </header>
    );
};

export default Footer;