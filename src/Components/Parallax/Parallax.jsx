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
  
  
  return (
    <>
        <motion.div ref={ref} viewport={{once: true}} 
        className={type==='services'? "parallaxG" :"parallax"} > 
          <motion.span style={{y: yText}}>{type==='services'? "My Work ?" : "Know More ?"}</motion.span>
          <motion.div style={{x: yBg}} className="stars"></motion.div>
          <div className="mountains"></div>
          <div className="trees"></div>
        </motion.div>
    </>
  )
}
export default Parallax