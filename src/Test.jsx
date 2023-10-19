import {motion, spring} from 'framer-motion'

const Test = () => {
  return (
    <div className="course">
        <motion.div className="box" 
        initial={{opacity: 0, scale: 0.5}}

        // This is where the viewport animation takes place
        whileInView={{opacity: 100, scale: 1}}
        // Once the element spawns, it will stay static
        viewport={{once: true}}
        
        whileHover={{scale: 1.2, transition: {type: 'spring', stiffness: 400, damping: 20}}}
        whileTap={{scale: 1}}
        >

        </motion.div>
    </div>
  )
}
export default Test