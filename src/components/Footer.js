import {Link} from "react-router-dom";
import "./Footer.css";

const Footer = () => {
    return (
        <header className="Footer">
            <nav>
                <ul>
                    <Link className="footerlink" to="/">Matthew Carlyon</Link>
                </ul>
            </nav>
        </header>
    );
};

export default Footer;