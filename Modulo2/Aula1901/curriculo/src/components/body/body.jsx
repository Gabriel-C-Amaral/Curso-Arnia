import '../body/body.css'
import BranchName from '../branch/branch'


const Body = () => {
    return (
        <div className="container">
        {BranchName("About me")}
        <div id='textAbout'>
        Donec a augue gravida, vulputate ligula et, pellentesque arcu. 🤖Morbi feugiat eros nec sem ultrices, et venenatis velit posuere. Donec bibendum commodo dui, eget sollicitudin urna sagittis non. Donec ac commodo tortor. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        </div>
        {BranchName("Education")}
      </div>    )
}

export default Body