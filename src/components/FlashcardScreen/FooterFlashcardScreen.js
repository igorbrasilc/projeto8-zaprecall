import {questionsReact} from '../constants/global';

export default function FooterFlashcardScreen(props) {

    const {answeredCount, answeredColors} = props;

    return (
        <footer className="footer-flashcard-screen">
            <p>{answeredCount}/{questionsReact.length} CONCLUÍDOS</p>
            {answeredColors.map(color => {
                if (color === "red") return <ion-icon name="close-circle"></ion-icon>
                else if (color === "yellow") return <ion-icon name="help-circle"></ion-icon>
                else return <ion-icon name="checkmark-circle"></ion-icon>
            })}
        </footer>
    )
}