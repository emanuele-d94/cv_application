import '../styles/Toolbar.css'
import ToolbarProfilePicture from "./ToolbarProfilePicture.jsx";
import ToolbarDescription from "./ToolbarDescription.jsx";
import ToolbarEducation from "./ToolbarEducation.jsx";
import ToolbarButton from "./ToolbarButton.jsx";

export default function Toolbar({setProfilePicture, setDescription, setEducation}) {

    const handlePrint = () => {
        window.print(); // nel file Cv.css si definisce cosa mostrare in fase di print
    };

    return (
        <>
        <div className="toolbar">
            <ToolbarProfilePicture setProfilePicture={setProfilePicture}></ToolbarProfilePicture>
            <ToolbarDescription setDescription={setDescription} />
            <ToolbarEducation setEducation={setEducation} />
            <ToolbarButton className={"toolbar-button"} text={"Scarica PDF"} onClick={handlePrint} />
        </div>
        </>
    )
}