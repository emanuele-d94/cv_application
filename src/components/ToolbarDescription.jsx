import { useState } from 'react';
import '../styles/Toolbar.css';
import ToolbarButton from "./ToolbarButton.jsx";

export default function ToolbarDescription({ setDescription }) {

    const [text, setText] = useState("");

    const handleDescription = (e) => {
        e.preventDefault();
        setDescription(text);
    };

    return (
        <div className="toolbar-description">
            <h2>Description</h2>
            <textarea
                className="toolbar-textarea"
                rows="5"
                cols="33"
                name="description"
                placeholder="Insert your description here"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <ToolbarButton
                className="toolbar-button"
                text="Add description"
                onClick={handleDescription}
            />
        </div>
    );
}