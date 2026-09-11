import '../styles/Cv.css'

export default function CvHeader({profilePicture, description}) {

    return (
        <>
        <h1 className={'preview'}>Cv Preview</h1>
        <div className="cv-header">
            <img className="profile-picture" src={profilePicture} alt="profile-picture"/>
            <div className="description">
                {description}
            </div>
        </div>
        </>
    )
}