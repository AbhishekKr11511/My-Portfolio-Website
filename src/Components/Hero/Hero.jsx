import mypic from '../../Assets/My cover.png'
import {BsMouse} from 'react-icons/bs'
import {CgScrollV} from 'react-icons/cg'
import './hero.scss'
import {motion} from 'framer-motion'


const textVariants = {
    initial: {
        x : -500,
        opacity:0
    },
    animate:{
        x: 0,
        opacity: 1,
        transition : {
            duration : 1,
            staggerChildren : 0.3,
        }
    },
    scrollButton:{
        opacity: 0,
        y:10,
        transition:{
            duration: 1.5,
            repeat: Infinity
        }
    }
}
const sliderVariants1 = {
    initial: {
      x: "-300%",
    },
    animate: {
      x: '-20%',
      transition: {
        repeat: Infinity,
        repeatType:"mirror",
        duration: 10,
      },
    },
  };
const sliderVariants2 = {
    initial: {
      x: '-50%',
    },
    animate: {
      x: "-800%",
      transition: {
        repeat: Infinity,
        repeatType:"mirror",
        duration: 60,
      },
    },
};





const Hero = () => {


  return (
    <div className="hero" id='hero'>
        <div className="hero-wrapper">
            <motion.div className="text-container" variants={textVariants} initial='initial' animate='animate'>
                <motion.span variants={textVariants} className='header-name'>Hi! Abhishek here.</motion.span>
                <motion.span variants={textVariants} className='header-content'>My objective is to offer <span className='highlight'>Accurate Solutions</span> at <span className='highlight'>Breakneck Speeds !</span></motion.span>
                <motion.span variants={textVariants} className='header-content'>I come prepared with <span className='highlight'>Outstanding Skills</span> & <span className='highlight'>Breathtaking Creativity !</span> </motion.span>
                <motion.span variants={textVariants} className='header-content'>Together, Lets develop initiatives that will astound everyone.</motion.span>
                <motion.span variants={textVariants} className='header-title'>Full Stack Developer</motion.span>
                <motion.span variants={textVariants} className='header-title'>& UI/UX designer</motion.span>
                <motion.div className="buttons">
                    <button className='button' onClick={location.href}>Get In Touch . . .</button>
                </motion.div>
                <motion.div className='mouse-icon' variants={textVariants} animate='scrollButton'>
                    <CgScrollV color='white' size={50}/>
                    <BsMouse color='white' size={50}/>
                </motion.div>
            </motion.div> 
        </div>


        <motion.div
        variants={sliderVariants1}
        initial="initial"
        animate='animate'
        className="slidingTextContainer-1"
        >
            Learning Everyday to be the Top 1% of Developers!!
        </motion.div>

        <motion.div
        variants={sliderVariants2}
        initial='initial'
        animate = 'animate'
        className="slidingTextContainer-2">
        Web Development, Designing, Programming!!
        </motion.div>



        <motion.div 
        initial={{y: 500, opacity: 0}} 
        animate={{y : 0, opacity: 1, transition:{type: 'spring', stiffness: 200}}}
        className="image-container">
            <img src={mypic} alt="My photo" />
        </motion.div>


    </div>
  )
}
export default Hero