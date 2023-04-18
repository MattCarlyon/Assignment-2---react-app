import { Link } from 'react-router-dom';
import "./HomeButton.css";

function HomeButton({ children }) {
  return <button className="Home-btn">{children}</button>;
}

export default function MyComponent() {
  return (
    <div>
      <Link to="/About">
        <HomeButton>Click to About</HomeButton>
      </Link>
    </div>
  );
}