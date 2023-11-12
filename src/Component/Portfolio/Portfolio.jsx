import './Portfolio.scss';
import React, { useRef } from 'react';
import {motion, useScroll, useSpring, useTransform} from 'framer-motion';


const items=[
  {
    id:1,
    title:"React Commerce",
    img:"https://instamobile.io/wp-content/uploads/2018/10/shopertino-cover-800x600.png",
    desc:"  Explore the world of modern e-commerce with React Commerce. This project showcases the seamless integration of React.js to create a dynamic and user-friendly online shopping experience. From intuitive navigation to real-time updates, React Commerce redefines the way we shop online.",
  },
  {
    id:2,
    title:"Next.js Blog",
    img:"https://i.ytimg.com/vi/1T3GF6endl8/maxresdefault.jpg",
    desc:" Immerse yourself in the world of content creation with Next.js Blog. This project leverages the power of Next.js to deliver a robust and efficient blogging platform. Experience lightning-fast page loads, effortless content management, and a delightful reading experience, all powered by Next.js.",
  },
  {
    id:3,
    title:"Vanilla Js App",
    img:"https://vanillajs-only.netlify.app/00-assets/images/projects/markdown/08-minimal-banking-app.jpg",
    desc:"  Discover the simplicity and versatility of web development with the Vanilla JS App. This project showcases the capability of pure JavaScript in building interactive and responsive web applications. From dynamic user interfaces to seamless data handling, the Vanilla JS App is a testament to the elegance of vanilla JavaScript.",
  },
  {
    id:4,
    title:"Music App",
    img:"https://freefrontend.com/assets/img/react-music-players/thumb.png",
    desc:"  Immerse yourself in the world of music with the Music App. This project brings together the power of React.js to create a feature-rich and visually stunning music player. Enjoy a seamless listening experience, explore curated playlists, and dive into the world of music discovery with the Music App.",
  },
];

const Single = ({item}) =>{
  const ref = useRef();
  const {scrollYProgress} =useScroll(
    {
      target: ref,
      //offset:["start start","end start" ]
      
    });

    const y = useTransform(scrollYProgress, [0,1], [-100, 100]);
  return(
    
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
        <img src={item.img} alt="" />
        </div>
        <motion.div className="textContainer" style={{y}}>
          <h2>{item.title}</h2>
          <p>{item.desc}</p>
          <button>See Demo</button>
        </motion.div>
      </div>
    </div>
    </section>
  )
}

const Portfolio = () => {

  const ref= useRef()
  const {scrollYProgress} =useScroll(
    {
      target: ref,
      offset:["end end", "start start"]
    });

    const scaleX = useSpring(scrollYProgress,{
      stiffness:100,
      damping:30,
    });
  return (
    <div className='portfolio' ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{scaleX}} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item ={item} key={item.id}/>
      ))}
    </div>
   
  )
}

export default Portfolio;