import Photo from '../../assets/photo.png'
import '../title/title.css'

const Title = () => {
    return (
        <div className='background'>
            <img src={Photo} alt="img" id='photo'/>
            <div className='text'>
            <div id='name'>Gabriel Amaral</div>
            <div id='profession'>Web Developer</div>
            </div>
        </div>
    )
}

export default Title