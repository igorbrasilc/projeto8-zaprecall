export default function QuestionGreen(props) {
    const {number} = props;

    return (
        <button className="btn-question question-zap">
            <p><s>Pergunta {number}</s></p>
            <ion-icon name="checkmark-circle"></ion-icon>
        </button>
    )
}