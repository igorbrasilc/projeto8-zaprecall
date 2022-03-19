import InitialScreen from './InitialScreen/InitialScreen';
import FlashcardScreen from './FlashcardScreen/FlashcardScreen';
import React from 'react';
import '../css/reset.css';
import '../css/style.css';

function App() {

    const [stateInitialScreen, setStateInitialScreen] = React.useState(true);

    function changeInitialScreen() {
        setStateInitialScreen(!stateInitialScreen);
    }

    return (
    <>
    {stateInitialScreen === true ? <InitialScreen callback={changeInitialScreen} /> : <FlashcardScreen callback={changeInitialScreen} />}  
    </>
    )
}

export default App;