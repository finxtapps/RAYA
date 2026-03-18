import { assets } from '../../assets/assets'
import './Header.css'

const Header = () => {
  return (
    <div className='header' style={{ backgroundImage: `url(${assets.header_img})` }}>
      <div className='header-contents'>
        
      </div>
    </div>
  )
}

export default Header