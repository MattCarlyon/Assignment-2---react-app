import {Link} from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <header className="header">
            <nav>
                <ul>
                    <Link className="links" to="/">Home</Link>
                    <Link className="links" to="/About">About</Link>
                    <Link className="links" to="/Contact">Contact</Link>
                </ul>
            </nav>
        </header>
    );
};

export default Header;