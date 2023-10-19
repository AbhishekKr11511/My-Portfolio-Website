import { motion } from "framer-motion";
import {FaHome, FaUserAlt, FaMailBulk, FaLaptopCode} from 'react-icons/fa'

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
      icon : <FaHome/>
    },
    {
      name : 'About',
      icon : <FaUserAlt/>
    },
    {
      name : 'Portfolio',
      icon : <FaLaptopCode/>
    },
    {
      name : 'Contact',
      icon : <FaMailBulk/>
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
          <span className="each-icon">{item.icon}</span>
          <span className="each-link">{item.name}</span>
          </div>
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;