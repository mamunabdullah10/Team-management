import InputBox from '../shared/ui/inputBox/InputBox'
import './header.css'

const Header = () => {
return(
    <div className='header'>
      <h2> Task Manager</h2>
        {/* search form */}
      <InputBox placeholder="Search" />
    </div>
)
}
export default Header