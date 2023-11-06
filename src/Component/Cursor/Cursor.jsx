import { useState, useEffect } from 'react';
import './Cursor.scss';
import { motion } from 'framer-motion';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <motion.div className='Cursor' animate={{ x: position.x, y: position.y }}>
      
    </motion.div>
  );
};

export default Cursor;
