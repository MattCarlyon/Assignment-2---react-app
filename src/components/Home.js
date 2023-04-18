import HomePicture from "./HomeImage";
import "./Modal.css";
import HomeButton from "./HomeButton";


const Home = () => {
    return (
        <div>
            <HomePicture />
            <h1>Matthew Carlyon - Trainee Front-End Developer</h1>
            <h2>Please navigate your way through my React.js page</h2>
            <HomeButton />
        </div>
    );
};

export default Home;