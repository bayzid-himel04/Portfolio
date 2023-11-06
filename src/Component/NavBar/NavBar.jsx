import Sidebar from '../Sidebar/Sidebar';
import './NavBar.scss';
import {motion} from 'framer-motion';

const NavBar = () => {
  return (
    <div className='navbar'>
        {/* sidebar */}
        <Sidebar/>
        <div className="wrapper">
            <motion.span initial={{opacity:0, scale:0.5}} 
            animate={{opacity:1, scale:1}} 
            transition={{duration:0.5}}
            >Bayzid Himel</motion.span>
            <div className="social">
            <a href=''target="_blank" rel="noopener noreferrer"><img src="/facebook.png" alt=""/></a>
            <a href=''target="_blank" rel="noopener noreferrer"><img src="/instagram.png" alt=""/></a>
            <a href='https://github.com/bayzid-himel04' target="_blank" rel="noopener noreferrer"><img src="/github.png" alt=""/></a>
            <a href='https://www.linkedin.com/in/bayzid-himel-98228a18b/'target="_blank" rel="noopener noreferrer"><img src="/LinkedIn.png" alt=""/></a>
            </div>
        </div>
    </div>
  )
}

export default NavBar;