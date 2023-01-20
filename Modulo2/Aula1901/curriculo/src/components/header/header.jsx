import '../header/header.css'
import iconEmail from '../../assets/icon1.svg'
import iconLink from '../../assets/icon2.svg'
import iconCell from '../../assets/icon3.svg'


const Header = () => {
    return(
        <div className='content-header'>
            <div>
            <div className="block-blue">
                <img src={iconEmail} alt="email" />
            </div>
            <span>gabriel@gabriel.com.br</span>
            </div>

            <div>
            <div className="block-blue">
                <img src={iconLink} alt="email" />
            </div>
            <span>gabriel@gabriel.com.br</span>
            </div>
            
            <div>
            <div className="block-blue">
                <img src={iconCell} alt="email" />
            </div>
            <span>gabriel@gabriel.com.br</span>
            </div>

        </div>
    )
}

export default Header