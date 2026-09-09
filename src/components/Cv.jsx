import '../styles/Cv.css'
import CvHeader from "./CvHeader.jsx";
import CvEducation from "./CvEducation.jsx";
import ToolbarButton from "./ToolbarButton.jsx";

export default function Cv({ profilePicture, description, education }) {

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

                <CvEducation education={education} />
            </div>
        </>
    )
}