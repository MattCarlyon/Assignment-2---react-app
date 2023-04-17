import AboutPic1 from '../images/Construction1.png';

const AboutPicture1 = () => {
    return (
        <div
            stlyer={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
            }}
        >
            <img src={AboutPic1} alt="Construction Site" height={600} wodth={450} />
        </div>
    )
}

export default AboutPicture1;