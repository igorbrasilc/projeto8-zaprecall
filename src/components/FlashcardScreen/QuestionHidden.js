export default function QuestionHidden(props) {
    const {callback, number} = props;
    return (
        <button className="btn-question" onClick={() => callback(true)}>
            <p>Pergunta {number}</p>
            <ion-icon name="play-outline"></ion-icon>
        </button>
    )
}