import "./resume.scss";
import Arrow from '../../Assets/Arrow.png'
import leftbrain from '../../Assets/left brain.png'
import rightbrain from '../../Assets/right brain.png'
import {motion} from "framer-motion";

const cardVariants = {
  offscreen: {
    y: 300
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const textVariants = {
    initial: {
        y : 500,
        opacity:0
    },
    animate:{
        y: 0,
        opacity: 1,
        transition : {
            duration : 0.5,
            staggerChildren : 0.2,
        }
    },
}


function Card({text}) {

  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
    >
      <div className="splash" style={{background: 'linear-gradient(-2deg, #ababab 0%, #fff 75%)'}} />
      <motion.div className="card" variants={cardVariants}>
        <span className="resume-text">
            {text}
        </span>
      </motion.div>
    </motion.div>
  );
}

const food = ["Resume", 300, 200]

const Resume = () => {
  return (
    <>
      <div className="resume">
          <Card text={food[0]}/>


        <motion.div className="resume-message" initial='initial' variants={textVariants} whileInView='animate' viewport={{once: true}}>
          
          {/* <div className="left">
            <span className="text-skills">Programmer</span>
            <img src={leftbrain} alt="" />
          </div> */}
          
          {/* <div className="middle"> */}
            <motion.img variants={textVariants} src={Arrow} alt="Arrowpng"/>
            <motion.span variants={textVariants} className="message">Feel Free To Look</motion.span>
            <motion.span variants={textVariants} className="message">Through My Resume</motion.span>
          {/* </div> */}
          
          {/* <div className="right">
            <span className="text-skills">Designer</span>
            <img src={rightbrain} alt="rightbrain" />
          </div> */}
        </motion.div>
      </div>
    </>
  );
};
export default Resume;
