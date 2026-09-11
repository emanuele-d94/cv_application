import ToolbarButton from "./ToolbarButton.jsx";

export default function Education({id,institute,title,year,grade,education,setEducation}) {

    function handleClick(e){
        e.preventDefault();
        const newEducation = education.filter(item => item.id !== id);
        setEducation(newEducation);
    }

    return(
        <div className="education">
            <p><b>Institute:</b> {institute}</p>
            <p><b>Title:</b> {title}</p>
            <p><b>Year:</b> {year}</p>
            <p><b>Grade:</b> {grade}</p>
            <ToolbarButton className={'toolbar-button'} text={'Delete'} onClick={handleClick}/>
        </div>
    )
}