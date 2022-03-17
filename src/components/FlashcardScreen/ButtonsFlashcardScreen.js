import ButtonFlashcardHidden from './ButtonFlashcardHidden';

const questions = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
];

function ButtonsFlashcardScreen() {
    return (
        questions.map((question, index) => <ButtonFlashcardHidden number={index + 1} />)
    )
}

export default ButtonsFlashcardScreen;