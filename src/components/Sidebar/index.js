import {Link} from 'react-router-dom';
import './index.scss';
import LogoJ from '../../assests/img/logo-j.png';
import LogoSubtitle from '../../assests/img/logo-sub.png';

const Sidebar = () => (
  <div className='nav-bar'>
    <Link className='logo' to='/'>
      <img src={LogoJ} alt="logo"/>
      <p>JOHN MICHAEL</p>
    </Link>
  </div>
)

export default Sidebar;

// <img src={LogoSubtitle} alt="john"/>