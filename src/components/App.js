import InitialScreen from './InitialScreen/InitialScreen';
import FlashcardScreen from './FlashcardScreen/FlashcardScreen';
import React from 'react';

let state = true;

function App() {
    return (
    <>
    {state === false ? <InitialScreen /> : <FlashcardScreen />}  
    </>
    )
}

export default App;