import '../styles/Toolbar.css'
import ToolbarButton from "./ToolbarButton.jsx";
import {useState} from "react";

export default function ToolbarProfilePicture({setProfilePicture}) {

    const [imageUrl, setImageUrl] = useState("");

    function updateImageUrl(e){
        if(e.target.value){
            setImageUrl(e.target.value);
            console.log(imageUrl);
        }
    }

    function setPicture(e) {
        e.preventDefault();
        setProfilePicture(imageUrl);
    }

    return(
        <>
        <div className="toolbar-profile-picture">
            <h2>Profile Picture</h2>
            <input className="toolbar-input"
                   type="url"
                   onChange={updateImageUrl}
                   name="url"
                   placeholder="https://profile-picture.com"
                   pattern="https://.*"
                   size="50"
                   required />
            <ToolbarButton className="toolbar-button" text="Upload" onClick={setPicture}/>
        </div>
        </>
    )
}