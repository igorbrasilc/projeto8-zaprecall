import {questionsReact} from '../constants/global';

export default function FooterFlashcardScreen(props) {

    const {answeredCount, answeredColors} = props;

    return (
        <footer className="footer-flashcard-screen">
            <p>{answeredCount}/{questionsReact.length} CONCLUÍDOS</p>
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