import Dash from '../../assets/dash.svg'
import '../branch/branch.css'


// const branchs = ["About Me", "Education", "Experience", "Skills"]

const BranchName = (name) => {
    
       return (        
       <div className='branchName'>
        {name}
       <img src={Dash} id="dash" alt="" />
       </div>
    )
}

export default BranchName