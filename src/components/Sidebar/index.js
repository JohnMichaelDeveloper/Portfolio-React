import {Link, NavLink} from 'react-router-dom';
import './index.scss';
import LogoJ from '../../assests/img/logo-j.png';
// import LogoSubtitle from '../../assests/img/logo-sub.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome, faUser, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faLinkedin, faGithub, faYoutube} from '@fortawesome/free-brands-svg-icons';
// 
const Sidebar = () => (
  <div className='nav-bar'>
    <Link className='logo' to='/'>
      <img src={LogoJ} alt="logo"/>
      <p>JOHN MICHAEL</p>      
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>
      <NavLink exact="true" activeclassname="active"  className="contact-link" to="/contact">
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>      
    </nav>
    <ul>
        <li>
          <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/johnmichaelpeixoto/'>
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a target="_blank" rel='noreferrer' href='https://github.com/JohnMichaelDeveloper'>
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a target="_blank" rel='noreferrer' href='https://www.youtube.com/channel/UC_zGlzdM4OyRL6NzSov3o-w'>
            <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
          </a>
        </li>
      </ul>
  </div>
)

export default Sidebar;

// <img src={LogoSubtitle} alt="john"/>