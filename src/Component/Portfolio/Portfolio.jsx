import './Portfolio.scss';
import React, { useRef } from 'react';
import {motion, useScroll, useSpring, useTransform} from 'framer-motion';


const items=[
  {
    id:1,
    title:"React Commerce",
    img:"https://instamobile.io/wp-content/uploads/2018/10/shopertino-cover-800x600.png",
    desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Et recusandae eaque veritatis in architecto ut tenetur expedita rerum assumenda ipsum.",
  },
  {
    id:2,
    title:"Next.js Blog",
    img:"https://i.ytimg.com/vi/1T3GF6endl8/maxresdefault.jpg",
    desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Et recusandae eaque veritatis in architecto ut tenetur expedita rerum assumenda ipsum.",
  },
  {
    id:3,
    title:"Vanilla Js App",
    img:"https://vanillajs-only.netlify.app/00-assets/images/projects/markdown/08-minimal-banking-app.jpg",
    desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Et recusandae eaque veritatis in architecto ut tenetur expedita rerum assumenda ipsum.",
  },
  {
    id:4,
    title:"Music App",
    img:"https://freefrontend.com/assets/img/react-music-players/thumb.png",
    desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Et recusandae eaque veritatis in architecto ut tenetur expedita rerum assumenda ipsum.",
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