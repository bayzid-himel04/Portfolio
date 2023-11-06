import './Portfolio.scss';
import React, { useRef } from 'react';
import {motion, useScroll, useSpring, useTransform} from 'framer-motion';


const items=[
  {
    id:1,
    title:"React Commerce",
    img:"https://images.pexels.com/photos/16776919/pexels-photo-16776919/free-photo-of-blue-motor-scooter-standing-outside-a-beauty-center.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
    desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Et recusandae eaque veritatis in architecto ut tenetur expedita rerum assumenda ipsum.",
  },
  {
    id:2,
    title:"Next.js Blog",
    img:"https://images.pexels.com/photos/15524939/pexels-photo-15524939/free-photo-of-rock-formation-in-sea.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
    desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Et recusandae eaque veritatis in architecto ut tenetur expedita rerum assumenda ipsum.",
  },
  {
    id:3,
    title:"Vanilla Js App",
    img:"https://images.pexels.com/photos/18888635/pexels-photo-18888635/free-photo-of-honda-motorcycle-on-roadside-in-woods.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
    desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Et recusandae eaque veritatis in architecto ut tenetur expedita rerum assumenda ipsum.",
  },
  {
    id:4,
    title:"Music App",
    img:"https://images.pexels.com/photos/1762578/pexels-photo-1762578.jpeg?auto=compress&cs=tinysrgb&w=300",
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