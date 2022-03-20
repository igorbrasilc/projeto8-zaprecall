import HeaderInitialScreen from './HeaderInitialScreen';
import ButtonInitialScreen from './ButtonInitialScreen';
import InputInitialScreen from './InputInitialScreen';
import {useState} from 'react';

function InitialScreen(props) {

    const [inputValue, setInputValue] = useState('');

    return (
    <div className="components-initial-screen">
        <HeaderInitialScreen />
        <InputInitialScreen callback={setInputValue} zapTarget={props.zapTarget} />
        <ButtonInitialScreen callback={props.callback} inputState={inputValue}/>
    </div>
    )
}

export default InitialScreen;