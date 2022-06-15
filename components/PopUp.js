
export default function PopUp(props) {
    return (
        <section className={`popup-message ${props.hidden == true ? "hidden" : ""}`}>
            <h2 className="message-title">{props.title}:</h2>
            <p className="message-desc">{props.desc == undefined ? "" : props.desc}</p>
            <div className="flex center p-absolute bottom right">
            </div>
        </section>
    )
}
