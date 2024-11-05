
import "./Logo.css"
import logo from "../../assets/images/logo.png"

const Logo = () => {
  return (
    <div className='logo__container'>
      <img src={logo} alt="Pack logo" style={{
          width: '70px', 
          height: 'auto', 
        }}/>
       <h4 style={{
        paddingTop:'25px',
       }}>PACK TECHNOLOGY</h4>
    </div>
  )
}

export default Logo
