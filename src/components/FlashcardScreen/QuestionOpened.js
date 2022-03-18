export default function QuestionOpened(props) {
    const {question, answer} = props;
    return (
        <article className="article-question">
            <p>{question}
            </p>
            <img src="./assets/setinha.png" alt="turnover-icon" />
        </article>  
    )
}