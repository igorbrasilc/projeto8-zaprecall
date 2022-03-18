export default function QuestionYellow(props) {
    const {number} = props;

    return (
        <button className="btn-question question-remembered">
            <p><s>Pergunta {number}</s></p>
            <ion-icon name="help-circle"></ion-icon>
        </button>
    )
}