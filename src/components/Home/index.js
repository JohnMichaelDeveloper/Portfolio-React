import { Link } from 'react-router-dom';
import LogoTitle from '../../assests/img/jm-vertical.png'

const Home = () => {

  return (
    <div className="container home-page">    
   
      <div className="text-zone">
        <h1>Hi, <br /> I'm
        <img src={LogoTitle} alt="developer" />
        lobodan
        <br/>
        web developer
        </h1>
        <h2>Frontend Developer / JavaScript / YouTuber</h2>
        <Link to="/contact" className='flat-button'>CONTACT ME</Link>
      </div>
    </div>
  )

}

export default Home;