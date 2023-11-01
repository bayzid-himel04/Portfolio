import { useState } from 'react';
import {motion} from 'framer-motion';
import Links from './Links/Links';
import './Sidebar.scss';
import ToggleButton from './ToggleButton/ToggleButton';

const Sidebar = () => {
    
    const [open,setOpen]= useState(false);
    
    const variants={
        open:{
            clipath:"circle(1200px at 50 px 50px)",
            transition:{
                type:"spring",
                stifness:20,
                
            },
        },
        closed:{
        clipath:"circle(30px at 50px 50px)",
        transition:{
            delay:0.5,
            type:"spring",
            stifness:400,
            damping:40,
        },
      },
    };
  return <motion.div className='sidebar' animate={ open ? "open" : "closed"}>
        <motion.div className="bg" variants={ variants }>
            <Links/>
        </motion.div>
        <ToggleButton setopen={setOpen}/>
    </motion.div>
  
}

export default Sidebar