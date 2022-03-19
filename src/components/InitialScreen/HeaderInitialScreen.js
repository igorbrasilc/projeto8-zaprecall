import LogoHeader from '../../assets/logo.png';

export default function HeaderInitialScreen() {
    return (
    <header className="header-initial-screen">
        <img src={LogoHeader} alt="logo-initial-screen"/>
        <h1>ZapRecall</h1>
    </header>
    )
}