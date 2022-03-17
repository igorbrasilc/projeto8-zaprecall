import HeaderFlashcardScreen from './HeaderFlashcardScreen';
import ButtonsFlashcardScreen from './ButtonsFlashcardScreen';
import FooterFlashcardScreen from './FooterFlashcardScreen';

function FlashcardScreen() {
    return (
    <div className="flashcard-screen">
        <HeaderFlashcardScreen />
        <section className="buttons">
            <ButtonsFlashcardScreen />
        </section>
        <FooterFlashcardScreen />
    </div>
    )
}

export default FlashcardScreen;