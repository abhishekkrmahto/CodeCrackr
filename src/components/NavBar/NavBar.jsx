import logo from '../../assets/logoImg.png'
import profileIcon from '../../assets/profileIcon.png'
import '../NavBar/NavBar.css'

const NavBar = () => {
  return (
    <div className='flex justify-between w-full items-center'>
      <div className="left">
        <img className='max-w-[60px] rounded-4xl ml-10' src={logo} alt="" />
      </div>
      <div className="right flex items-center justify-center gap-5 cursor-pointer">
        <span>PROFILE</span>
        <img className='max-w-[40px] rounded-4xl mr-10' src={profileIcon} alt="" />
      </div>
    </div>
  )
}

export default NavBar
