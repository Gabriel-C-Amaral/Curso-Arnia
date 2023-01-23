import '../footer/footer.css'
import FilledBall from  '../../assets/filledball.svg'
import VoidBall from  '../../assets/voidball.svg'


const BolaCheia = () => {
    return(
        <img src={FilledBall} alt="" />
    )
}
const BolaVazia = () => {
    return (
        <img src={VoidBall} alt="" />
    )
}



const Footer = () => {

    return (
        <div id='list'>
            <ul>
                <li>Flutter <BolaCheia/> <BolaCheia/> <BolaCheia/> <BolaVazia/> <BolaVazia/> </li>
                <li>React native <BolaCheia/> <BolaCheia/> <BolaCheia/> <BolaVazia/> <BolaVazia/> </li>
                <li>Ionic <BolaCheia/> <BolaCheia/> <BolaCheia/> <BolaCheia/> <BolaVazia/> </li>
                <li>Unity <BolaCheia/> <BolaCheia/> <BolaCheia/> <BolaCheia/> <BolaCheia/> </li>
            </ul>
        </div>
    )
}

export default Footer