import ArniaLogo from '../assets/arnialogo.svg'
import './header.css'

const Header = () => {
    return (
        <div className="header">
            <img id='logo' src={ArniaLogo} alt="" />

        </div>
    )
}

export default Header