import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <nav>
                <ul>
                    <Link className="links" to="/">Home</Link>
                    <Link className="links" to="/">About</Link>
                    <Link className="links" to="/">Contact</Link>
                </ul>
            </nav>
        </header>
    );
};

export default Header;