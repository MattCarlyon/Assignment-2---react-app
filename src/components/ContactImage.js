import GitHub from '../images/GitHub.png';

const ContactPicture = () => {
    return (
        <div
            stlyer={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
            }}
        >
            <img src={GitHub} alt="Construction Site" height={300} width={300} />
        </div>
    )
}

export default ContactPicture;