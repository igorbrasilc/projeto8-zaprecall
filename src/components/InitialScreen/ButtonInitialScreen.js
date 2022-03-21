
export default function ButtonInitialScreen(props) {

    let stateValidation = false;
    const convertedState = parseInt(props.inputState);

    if (convertedState === NaN) {
    } else if (convertedState < 1 || convertedState > 8) {
    alert("A meta deve ser um número de 1 a 8!");
    } else if (convertedState > 0 && convertedState < 9) {
    stateValidation = true;
    }

    return stateValidation === false ? (
        <button className='header-button' onClick={() => props.callback()} disabled>Iniciar Recall!</button>
    ) : (
        <button className='header-button' onClick={() => props.callback()}>Iniciar Recall!</button>
    )
}