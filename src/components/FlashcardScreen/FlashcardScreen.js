import HeaderFlashcardScreen from './HeaderFlashcardScreen';
import ButtonsFlashcardScreen from './ButtonsFlashcardScreen';
import FooterFlashcardScreen from './FooterFlashcardScreen';
import React from 'react';

function FlashcardScreen(props) {

    const [completedQuestion, setCompletedQuestion] = React.useState(0);
    const [colorCompletedQuestion, setColorCompletedQuestion] = React.useState([]);

    function increaseCompletedQuestion(color) {
        setCompletedQuestion(completedQuestion + 1);
        setColorCompletedQuestion([...colorCompletedQuestion, color]);
    }

    function resetCount() {
        setCompletedQuestion(0);
        setColorCompletedQuestion([]);
        props.callback();
    }


    return (
    <div className="flashcard-screen">
        <HeaderFlashcardScreen />
        <section className="buttons">
            <ButtonsFlashcardScreen callback={increaseCompletedQuestion} />
        </section>
        <FooterFlashcardScreen answeredCount={completedQuestion} answeredColors={colorCompletedQuestion} callback={resetCount}/>
    </div>
    )
}

export default FlashcardScreen;