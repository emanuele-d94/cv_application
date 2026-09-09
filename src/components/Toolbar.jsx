import '../styles/Toolbar.css'
import ToolbarProfilePicture from "./ToolbarProfilePicture.jsx";
import ToolbarDescription from "./ToolbarDescription.jsx";
import ToolbarEducation from "./ToolbarEducation.jsx";

export default function Toolbar({setProfilePicture, setDescription, setEducation}) {

    return (
        <>
        <div className="toolbar">
            <ToolbarProfilePicture setProfilePicture={setProfilePicture}></ToolbarProfilePicture>
            <ToolbarDescription setDescription={setDescription} />
            <ToolbarEducation setEducation={setEducation} />
        </div>
        </>
    )
}