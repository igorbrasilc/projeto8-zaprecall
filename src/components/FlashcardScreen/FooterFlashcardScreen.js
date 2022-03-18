import {questionsReact} from '../constants/global';

export default function FooterFlashcardScreen(props) {
    return (
        <footer className="footer-flashcard-screen">
            <p>0/{questionsReact.length} CONCLUÍDOS</p>
        </footer>
    )
}