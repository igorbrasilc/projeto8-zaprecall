import ButtonFlashcard from './ButtonFlashcard';
import {questionsReact} from '../constants/global';

const questionsShuffled = questionsReact.sort(shuffle);

function shuffle() {
    return Math.random() - 0.5;
}

function ButtonsFlashcardScreen(props) {

    return (
        questionsShuffled.map((question, index) => 
        <ButtonFlashcard key={index} number={index + 1} question={question.question} answer={question.answer} callback={props.callback}/>)
    )
}

export default ButtonsFlashcardScreen;