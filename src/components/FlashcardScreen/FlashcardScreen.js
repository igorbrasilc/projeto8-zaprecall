import HeaderFlashcardScreen from './HeaderFlashcardScreen';
import ButtonsFlashcardScreen from './ButtonsFlashcardScreen';
import FooterFlashcardScreen from './FooterFlashcardScreen';
import React from 'react';

function FlashcardScreen() {

    const [completedQuestion, setCompletedQuestion] = React.useState(0);
    const [colorCompletedQuestion, setColorCompletedQuestion] = React.useState([]);

    function increaseCompletedQuestion(color) {
        setCompletedQuestion(completedQuestion + 1);
        setColorCompletedQuestion([...colorCompletedQuestion, color]);
    }


    return (
    <div className="flashcard-screen">
        <HeaderFlashcardScreen />
        <section className="buttons">
            <ButtonsFlashcardScreen callback={increaseCompletedQuestion} />
        </section>
        <FooterFlashcardScreen answeredCount={completedQuestion} answeredColors={colorCompletedQuestion}/>
    </div>
    )
}

export default FlashcardScreen;