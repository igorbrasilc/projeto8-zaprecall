import ButtonFlashcardHidden from './ButtonFlashcardHidden';
import {questionsReact} from '../constants/global';

function ButtonsFlashcardScreen() {
    return (
        questionsReact.map((question, index) => <ButtonFlashcardHidden number={index + 1} />)
    )
}

export default ButtonsFlashcardScreen;