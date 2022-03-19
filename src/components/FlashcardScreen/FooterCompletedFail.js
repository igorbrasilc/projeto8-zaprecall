import SadFace from '../../assets/sad.png';

export default function FooterCompletedFail(props) {

    const {answeredCount, answeredColors, questionLength} = props;
    
    return (
        <footer className="footer-flashcard-screen">
            <p><img src={SadFace} alt="sad-face"/><span>Putz...</span></p>
            <p>Ainda faltam alguns...<br></br>
            Mas não desanime!</p>
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