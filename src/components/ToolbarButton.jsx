export default function ToolbarButton({className, text, onClick}) {
    return(
        <button className={className} onClick={onClick}>{text}</button>
    )
}