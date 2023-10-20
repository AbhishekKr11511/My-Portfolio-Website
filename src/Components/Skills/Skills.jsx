import "./skill.scss";
import data1 from "./data1.json";
import data2 from "./data2.json";
import { motion } from "framer-motion";
import { MyResponsiveBarSkills } from "./Coding";
import { MyResponsiveBarDesign } from "./Designing";

const skillVariants = {
  initial_left: {
    x: 200,
    // scaleX : 0,
    opacity: 0,
  },
  initial_right: {
    // scaleX : 0,
    x: -200,
    opacity: 0,
  },
  animate: {
    x: 0,
    // scaleX: 1,
    opacity: 1,
    transition: {
      delay: 0.75,
      type: 'spring',
      stiffness: 300
    },
  },
};

const Skills = () => {
  return (
    <div className="skills">
      <motion.div className="skills-chart"
      variants={skillVariants}
      initial="initial_left"
      whileInView="animate"
      >
        <span className="skills-title">Coding Skills</span>
        <MyResponsiveBarSkills data={data1} />

        <div className="coding-skills">
          
        </div>
        
      </motion.div>

      <div className="divider"></div>

      <motion.div className="skills-chart"
      variants={skillVariants}
      initial="initial_right"
      whileInView="animate"
      >
        <span className="skills-title">Design Skills</span>
        <MyResponsiveBarDesign data={data2} />

        <div className="design-skills">

        </div>
        
      </motion.div>
    </div>
  );
};
export default Skills;
