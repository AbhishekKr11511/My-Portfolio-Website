import "./hire.scss";
import data from "./data.json";
import { MyResponsiveRadar } from "./Radar";
import {motion} from 'framer-motion'

const HireMe = () => {
  return (
    <div className="hire">
      <motion.span className="hire-title"
      initial={{x: -100}}
      whileInView={{x: 0, transition:{type: 'spring', stiffness: 200}}}
      >Why hire me?</motion.span>
      <motion.div className="hire-radar"
      initial={{scale : 0}}
      whileInView={{scale: 1, transition: {type: 'spring', stiffness: 200}}}
      >
        <MyResponsiveRadar data={data} />
      </motion.div>
    </div>
  );
};
export default HireMe;
