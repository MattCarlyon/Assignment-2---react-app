import HomePicture from "./HomeImage";
import "./Modal.css";
import HomeButton from "./HomeButton";
import "./Body.css";


const Home = () => {
    return (
        <div className="Home">
            <HomePicture />
            <h1>Matthew Carlyon - Trainee Front-End Developer</h1>
            <h2>Please navigate your way through my React.js page</h2>
            <HomeButton />
        </div>
    );
};

export default Home;