import '../styles/Cv.css'
import CvHeader from "./CvHeader.jsx";
import CvEducation from "./CvEducation.jsx";

export default function Cv({ profilePicture, description, education, setEducation }) {

    const handlePrint = () => {
        window.print();
    };

    return (
        <>
            <div className="cv">
                <CvHeader
                    profilePicture={profilePicture}
                    description={description}
                />
                <CvEducation education={education} setEducation={setEducation} />
            </div>
        </>
    )
}