import "./skill.scss";
import data1 from "./data1.json";
import data2 from "./data2.json";
import { motion } from "framer-motion";
import { MyResponsiveBarSkills } from "./Coding";
import { MyResponsiveBarDesign } from "./Designing";
import { api, api2, cpp, css, docker, express, figma,fire,github,gpt,html,js,mongo,nodejs,npm,postman,python,react,redux,router,sasss,taiwind,tensorflow,typescript,vscode, ant,bootstrap,creative,material,github2} from "../../Assets/logos";

const skillVariants = {
  initial_left: {
    x: 200,
    opacity: 0,
  },
  initial_right: {
    x: -200,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.75,
      type: 'spring',
      stiffness: 300,

    },
  },
};

const logoVariants = {
  initial: {
    scaleX : 0,
  },
  animate: {
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 200,
      staggerChildren : 0.3,
    },
  },
}

const condingArr = [html, api2,js,react,redux,router,typescript,nodejs,express,mongo,github2,npm,]
const designArr = [css,sasss,taiwind,figma,ant,creative,bootstrap,material,vscode,postman,python, cpp]

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <motion.div className="skills-chart"
      variants={skillVariants}
      initial="initial_left"
      viewport={{once: true}}
      whileInView="animate"
      >
        <span className="skills-title">Coding Skills</span>
        <div className="skill-bars">
          <MyResponsiveBarSkills data={data1} />
        </div>


        <div className="coding-skills" >
          {condingArr.map((item, index)=> {
            return <motion.div className="logo-container" variants={logoVariants}><img src={item} alt={`logo${index}`}/></motion.div>
          })}
        </div>
        
      </motion.div>

      {/* This is the mid divider which will dissappear in mobile version */}
      <div className="divider"></div>

      <motion.div className="skills-chart"
      variants={skillVariants}
      initial="initial_right"
      whileInView="animate"
      viewport={{once: true}}
      >
        <span className="skills-title">Design Skills</span>
        <div className="skill-bars">
          <MyResponsiveBarDesign data={data2} />
        </div>

        <div className="design-skills" >
          {designArr.map((item, index)=> {
            return <motion.div className="logo-container" variants={logoVariants}><img src={item} alt={`logo${index}`}/></motion.div>
          })}
        </div>
        
      </motion.div>
    </div>
  );
};
export default Skills;
