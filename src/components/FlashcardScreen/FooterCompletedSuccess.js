import PartyFace from '../../assets/party.png';

export default function FooterCompletedSuccess(props) {

    const {answeredCount, answeredColors, questionLength} = props;

    return (
        <footer className="footer-flashcard-screen">
            <p><img src={PartyFace} alt="party-face"/><span>Parabéns!</span></p>
            <p>Você não esqueceu de nenhum flashcard!</p>
            <p>{answeredCount}/{questionLength} CONCLUÍDOS</p>
            <div className="footer-icons">
            {[...answeredColors].map(color => {
                if (color === "red") return <div className="question-not-remembered"><ion-icon name="close-circle"></ion-icon></div>
                else if (color === "yellow") return <div className="question-remembered"><ion-icon name="help-circle"></ion-icon></div>
                else return <div className="question-zap"><ion-icon name="checkmark-circle"></ion-icon></div>
            })}
            </div>
        </footer>
    )
}