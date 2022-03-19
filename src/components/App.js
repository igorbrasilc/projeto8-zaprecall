import InitialScreen from './InitialScreen/InitialScreen';
import FlashcardScreen from './FlashcardScreen/FlashcardScreen';
import React from 'react';
import '../css/reset.css';
import '../css/style.css';

function App() {

    const [stateInitialScreen, setStateInitialScreen] = React.useState(true);

    function changeInitialScreen() {
        setStateInitialScreen(false);
    }

    return (
    <>
    {stateInitialScreen === true ? <InitialScreen callback={changeInitialScreen} /> : <FlashcardScreen />}  
    </>
    )
}

export default App;