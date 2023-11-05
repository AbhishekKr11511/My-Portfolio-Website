import "./resume.scss";
import Arrow from '../../Assets/Arrow.png'
import leftbrain from '../../Assets/left brain.png'
import rightbrain from '../../Assets/right brain.png'
import {motion} from "framer-motion";
import resume from '../../Assets/Download/Abhisheks Resume.pdf'

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

const downloadFile = async () => {
  const pdfPath = resume;

  const a = document.createElement('a');
  a.href = pdfPath;
  a.click();
};


function Card({text}) {

  return (
    <motion.div
    onClick={downloadFile}
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
    >
      {/* <div className="splash" style={{background: 'linear-gradient(-2deg, #ababab 0%, #fff 75%)'}} /> */}
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
      <div className="resume" id="resume"> 
          <Card text={food[0]}/>


        <motion.div className="resume-message" initial='initial' variants={textVariants} whileInView='animate' viewport={{once: true}}>

            <motion.img variants={textVariants} src={Arrow} alt="Arrowpng"/>
            <motion.span variants={textVariants} className="message">Feel Free To Look</motion.span>
            <motion.span variants={textVariants} className="message">Through My Resume</motion.span>

        </motion.div>
      </div>
    </>
  );
};
export default Resume;
