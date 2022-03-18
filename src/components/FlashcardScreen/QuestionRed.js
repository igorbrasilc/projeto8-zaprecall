export default function QuestionRed(props) {

    const {number} = props;

    return (
        <button className="btn-question question-not-remembered">
            <p><s>Pergunta {number}</s></p>
            <ion-icon name="close-circle"></ion-icon>
        </button>
    )
}