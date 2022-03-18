import HeaderInitialScreen from './HeaderInitialScreen';
import ButtonInitialScreen from './ButtonInitialScreen';

function InitialScreen(props) {
    return (
    <div className="components-initial-screen">
        <HeaderInitialScreen />
        <ButtonInitialScreen callback={props.callback} />
    </div>
    )
}

export default InitialScreen;