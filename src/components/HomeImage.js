import HomePic from '../images/Home.png';

const HomePicture = () => {
    return (
        <div
            styler={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
            }}
        >
            <img src={HomePic} alt="Cornish Beach" height={600} wodth={450} />
        </div>
    )
}

export default HomePicture;