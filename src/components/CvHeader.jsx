import '../styles/Cv.css'
export default function CvHeader({profilePicture, description}) {

    return (
        <>
        <div className="cv-header">
            <img className="profile-picture" src={profilePicture} alt="profile-picture"/>
            <div className="description">
                {description}
            </div>
        </div>
        </>
    )
}