export default function Education({institute,title,year,grade}) {

    return(
        <div className="education">
            <p><b>Institute:</b> {institute}</p>
            <p><b>Title:</b> {title}</p>
            <p><b>Year:</b> {year}</p>
            <p><b>Grade:</b> {grade}</p>
        </div>
    )
}