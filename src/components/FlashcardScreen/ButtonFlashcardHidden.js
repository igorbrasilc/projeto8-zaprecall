export default function ButtonFlashcardHidden(props) {
    return (
        <button className="btn-question">
            <p>Pergunta {props.number}</p>
            <ion-icon name="play-outline"></ion-icon>
        </button>
    )
}