import './Services.scss';
import { motion, useInView} from 'framer-motion';


const variants={
  initial:{
    x:-500,
    y:100,
    opacity:0
  },
  animate:{
    x: 0,
    opacity:1,
    y:0,
    transition:{
      duration:1,
      staggerChildren:0.1,
    },
  },
};


const Services = () => {
  return (
    <motion.div 
    className='services' 
    variants={variants}
    initial="initial"
    whileInView="animate">
      
        <motion.div className="textContainer"  variants={variants}>
          <p>I focus on helping your brand grow
            <br/> and move forward</p>  
          <hr/>
        </motion.div>
        <motion.div className="titleContainer"  variants={variants}>
            <div className="title">
                <img src="/people.webp" alt="" />
                <h1><motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas</h1>
            </div>
            <div className="title">
                <h1><motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.</h1>
                <button>What We Do?</button>
            </div>
        </motion.div>
        <motion.div className="listContainer"  variants={variants}>
                      <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
              <h2>React.js Development</h2>
              <p>
                As a React.js developer, I specialize in crafting modern and efficient user interfaces. 
                I leverage the power of React.js to build dynamic and responsive web applications, ensuring 
                a smooth and engaging user experience.
              </p>
              <button>Learn More</button>
            </motion.div>

            <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
              <h2>Front-End Optimization</h2>
              <p>
                I excel in optimizing front-end performance to deliver lightning-fast web experiences. 
                From code splitting to lazy loading, I implement best practices to enhance website 
                speed and responsiveness, providing users with a seamless browsing journey.
              </p>
              <button>Explore Techniques</button>
            </motion.div>

            <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
              <h2>Cybersecurity Analysis</h2>
              <p>
                As a cybersecurity analyst, I am committed to safeguarding digital assets from potential 
                threats. My skills include conducting comprehensive risk assessments, implementing 
                security protocols, and staying ahead of emerging cyber threats to ensure robust data protection.
              </p>
              <button>Enhance Security</button>
            </motion.div>

            <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
              <h2>Vulnerability Assessment</h2>
              <p>
                Specializing in identifying and mitigating potential vulnerabilities, I conduct thorough 
                assessments to fortify digital infrastructures. From penetration testing to security audits, 
                I am dedicated to maintaining a secure online environment for businesses and users alike.
              </p>
              <button>Secure Your Systems</button>
            </motion.div>

        </motion.div>
    </motion.div>
  )
}

export default Services