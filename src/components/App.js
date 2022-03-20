import InitialScreen from './InitialScreen/InitialScreen';
import FlashcardScreen from './FlashcardScreen/FlashcardScreen';
import {useState} from 'react';
import '../css/reset.css';
import '../css/style.css';

function App() {

    const [stateInitialScreen, setStateInitialScreen] = useState(true);
    const [zapTarget, setZapTarget] = useState(0);

    function changeInitialScreen() {
        setStateInitialScreen(!stateInitialScreen);
    }

    return (
    <>
    {stateInitialScreen === true ? 
    <InitialScreen callback={changeInitialScreen} zapTarget={setZapTarget} /> 
    : 
    <FlashcardScreen callback={changeInitialScreen} zapTarget={zapTarget} />}  
    </>
    )
}

export default App;