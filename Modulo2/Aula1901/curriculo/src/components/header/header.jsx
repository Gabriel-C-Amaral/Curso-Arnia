import '../header/header.css'
import iconEmail from '../../assets/icon1.svg'
import iconLink from '../../assets/icon2.svg'
import iconCell from '../../assets/icon3.svg'

const HeaderContact =({icon, text}) => {


    return (
        <div className='ndiv'>
            <div className="block-blue">
                <img src={icon} alt="email" />
            </div>
            <span>{text}</span>
            </div>
    )
}


const Header = () => {
    return(
        <div className='content-header'>
            <HeaderContact icon={iconEmail} text="gabrielcorreaamaral94@gmail.com"/>

            <HeaderContact icon={iconLink} text="https://github.com/Gabriel-C-Amaral"/>
            
            <HeaderContact icon={iconCell} text="(47) 99925-9346"/>
        </div>
    )
}

export default Header