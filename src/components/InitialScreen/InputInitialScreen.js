export default function InputInitialScreen(props) {

    const getInputValue = event => {
        props.callback(event.target.value);
        props.zapTarget(event.target.value);
    }

    return (
        <input type="number" className="input-initial-screen" 
        min="1" max="8" placeholder="Digite sua meta de zaps..." onChange={getInputValue}></input> 
    )
}