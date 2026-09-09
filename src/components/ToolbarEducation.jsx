import '../styles/Toolbar.css';
import ToolbarButton from "./ToolbarButton.jsx";
import {useState} from "react";

export default function ToolbarEducation({ setEducation }) {

    const [formData, setFormData] = useState({
        institute: "",
        title: "",
        year: "",
        grade: "",
    });

    function handleChange(e){
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    function handleSubmit(e){
        e.preventDefault();

        if (!formData.institute || !formData.title) {
            return;
        }

        const newEducation = {
            id: Date.now(),
            institute: formData.institute,
            title: formData.title,
            year: formData.year,
            grade: formData.grade,
        };

        setEducation((prev) => [...prev, newEducation]);

        setFormData({
            institute: "",
            title: "",
            year: "",
            grade: "",
        });
    }

    return (
        <div className="toolbar-education">
            <h2>Education</h2>
            <form onSubmit={handleSubmit} className="toolbar-education-form">
                <div className="form-group">
                    <label htmlFor="institute">Institute  </label>
                    <input
                        type="text"
                        id="institute"
                        name="institute"
                        value={formData.institute}
                        onChange={handleChange}
                        placeholder="e.g. University of Turin"
                        size={30}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="title">Title  </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="e.g. Bachelor's Degree"
                        size={30}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="year">Year  </label>
                    <input
                        type="number"
                        id="year"
                        name="year"
                        value={formData.year}
                        onChange={handleChange}
                        placeholder="e.g. 2023"
                        min="1900"
                        max="2100"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="grade">Grade  </label>
                    <input
                        type="text"
                        id="grade"
                        name="grade"
                        value={formData.grade}
                        onChange={handleChange}
                        placeholder="e.g. 110/110"
                    />
                </div>
                <ToolbarButton
                    className="toolbar-button"
                    text="Add education"
                    onClick={handleSubmit}
                />
            </form>
        </div>
    );
}