import './upbutton.scss'
import {BsFillArrowUpCircleFill} from 'react-icons/bs'

const UpButton = () => {
  return (
    <div className="upbutton">
        <a href="#hero"><BsFillArrowUpCircleFill fontSize={'2rem'} color='white' onClick={window.location.href = "#hero"}/></a>
    </div>
  )
}
export default UpButton