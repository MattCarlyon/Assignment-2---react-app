import AboutPicture1 from "./AboutImage1";
import AboutPicture2 from "./AboutImage2";
import "./Body.css";

const About = () => {
    return (
        <div className="About">
            <h1>All About Me</h1>
            <h2>From - Construction Professional</h2>
            <h3>I have spent the first half of my professional career as a construction Project Manager, Quantity Surveyor and Building Surveyor. 
                I have really enjoyed my time working in this sector and have had the privileged to work on some existing project, but now its time for something new...</h3>
            <AboutPicture1 />
            <h2>To - Trainee Front End Developer</h2>
            <h3>I'm super excited to start the next chapter of my working life working as a front-end developer and ultimately full-stack developer. It's early days, but i already know this was the best decision. </h3>
            <AboutPicture2 />
        </div>
    );
};

export default About;