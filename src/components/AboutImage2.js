import AboutPic2 from '../images/Computers1.png';

const AboutPicture2 = () => {
    return (
        <div
            stlyer={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
            }}
        >
            <img src={AboutPic2} alt="Computer Desk" height={600} wodth={450} />
        </div>
    )
}

export default AboutPicture2;