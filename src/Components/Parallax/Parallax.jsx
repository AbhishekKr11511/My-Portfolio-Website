import './parallax.scss'
import {motion, useScroll, useTransform} from 'framer-motion'
import { useRef } from 'react'




const Parallax = ({type}) => {

  const ref = useRef(null)

  const {scrollYProgress} = useScroll({
    target: ref,
    offset:["start end", "end start"]
  })

  const yBg = useTransform(scrollYProgress, [0,1], ['-15%', '0%'])
  const yText = useTransform(scrollYProgress, [0,1], ['-10%', '150%'])

  const sceneVariants = {
    initial: {
        y : 200,
        opacity:0
    },
    animate:{
        y: 0,
        opacity: 1,
        transition : {
            duration : 0.75,
            staggerChildren : 0.1,
        }
    },
}
  
  
  return (
    <>
        <motion.div variants={sceneVariants} initial='initial' whileInView='animate' ref={ref} viewport={{once: true}} 
        className={type==='services'? "parallaxG" :"parallax"} > 
          <motion.span variants={sceneVariants} style={{y: yText}}>{type==='services'? "My Work ?" : "Know More ?"}</motion.span>
          <motion.div variants={sceneVariants} style={{x: yBg}} className="stars"></motion.div>
          <motion.div variants={sceneVariants} className="mountains"></motion.div>
          <motion.div variants={sceneVariants} className="trees"></motion.div>
        </motion.div>
    </>
  )
}
export default Parallax