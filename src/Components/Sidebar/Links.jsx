import { motion } from "framer-motion";
import {FaHome, FaUserAlt, FaMailBulk, FaLaptopCode, FaChartBar} from 'react-icons/fa'

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection : 1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  const items = [
    {
      name : 'Homepage',
      icon : <FaHome/>,
      scroll: '#hero'
    },
    {
      name : 'Resume',
      icon : <FaUserAlt/>,
      scroll: '#resume'
    },
    {
      name : 'Skills',
      icon : <FaChartBar/>,
      scroll: '#skills'
    },
    {
      name : 'Portfolio',
      icon : <FaLaptopCode/>,
      scroll: '#portfolio'
    },
    {
      name : 'Contact',
      icon : <FaMailBulk/>,
      scroll: '#contact'
    }
  ]

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.a
          href={`#${item.name}`}
          key={item}
          variants={itemVariants}
          whileHover={{ scale: 1.2, transition: {ease: 'easeOut'}}}
          whileTap={{ scale: 0.95 }}
        >
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1rem'}}>
          <a className="each-icon" href={item.scroll}>{item.icon}</a>
          <a className="each-link" href={item.scroll}>{item.name}</a>
          </div>
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;