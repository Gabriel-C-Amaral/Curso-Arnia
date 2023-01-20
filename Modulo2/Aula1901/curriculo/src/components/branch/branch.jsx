import Dash from '../../assets/dash.svg'
import '../branch/branch.css'


const branchs = ["About Me", "Education", "Experience", "Skills"]

const BranchName = (index) => {
       return (        
       <div className='branchName'>{branchs[index]}
       <img src={Dash} id="dash" alt="" />
       </div>
    )
}

export default BranchName