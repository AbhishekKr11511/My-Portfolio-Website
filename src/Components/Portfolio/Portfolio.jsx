import { useRef } from 'react'
import './portfolio.scss'
import {motion, useScroll, useSpring, useTransform} from 'framer-motion'
import gpt from '../../Assets/GPT layout.png'
import zaffran from '../../Assets/Zaffran Layout.png'
import cryptolayout from '../../Assets/Crypto Layout.png'
import threejs from '../../Assets/3d Shirt layout.png'
import poogle from '../../Assets/Poogle Layout.png'


const projects = [
  {
    title : "Zaffran",
    subtitle : 'The fine dining exprience like never before',
    img: zaffran,
    description : "Indulge in a culinary voyage at our Indian-Persian fine dining establishment, where the rich, aromatic allure of saffron harmonizes with exquisite flavors for a truly enchanting gastronomic experience.",
    link : 'https://github.com/AbhishekKr11511/Zaffran-website'
  },
  {
    title : "GPT-3",
    subtitle : 'A Place to get the latest info about AI',
    img: gpt,
    description : "Explore the cutting-edge world of AI and machine learning on our website. Stay informed with the latest updates, insightful blogs, and innovative features, unlocking the potential of tomorrow's technology today.",
    link : 'https://github.com/AbhishekKr11511/Project-GPT-3-website-React'

  },
  {
    title : "3D Shirt Design",
    subtitle : 'Customise your T-shirt, add custom logos.',
    img: threejs,
    description : "Unleash your creativity with our 3D T-shirt design application. Craft personalized, one-of-a-kind shirts with custom colors and images, bringing your unique style to life effortlessly and vividly.",
    link : 'https://github.com/AbhishekKr11511/Project-3D-Customize-Your-Shirt'

  },
  {
    title : "Poogle",
    subtitle : 'A Search engine, equiped with search results, images, and videos',
    img: poogle,
    description : "Discover simplicity with our minimalist search engine. Effortlessly find search results, images, and videos that match your query, all while enjoying a clean, distraction-free user experience.",
    link : 'https://github.com/AbhishekKr11511/Project-Poogle-Search-Engine'

  },
  {
    title : "Cyber Assets",
    subtitle : 'Find your latest crypto Stats and news here',
    img: cryptolayout,
    description : "Empower your crypto journey with our comprehensive website. Get real-time updates on the dynamic market, dive into breaking news, explore in-depth crypto exchange data, and discover the top cyber currencies of today. Elevate your knowledge and make informed decisions within the vast realm of digital assets, all on one platform",
    link : 'https://github.com/AbhishekKr11511/Project-Cryptocurrency-Price-Tracker-Exchanges-News'

  },
]

const Single = ({project}) => {

  const singleRef = useRef()

  const slideVariant = {
    initial : {
      x : 300
    },
    animate: {
      x : 0,
      type: 'spring',
      stiffness: 200,
      transition : {type: 'spring',
      stiffness: 100}
    }
  }

  const {scrollYProgress} = useScroll({
    target:singleRef,
    offset: ["start end", "end center"]
  })

  const yText = useTransform(scrollYProgress, [0,1], [300, -100])

  
  return <section ref={singleRef}>
    <div className="container">

      <div className="wrapper">
        <div className="imageContainer">
          <img src={project.img} alt="Insert Image here" />
        </div>

        <motion.div variants={slideVariant} initial='initial' whileInView='animate' viewport={{once: true}} className="textContainer" style={{y: yText}}>
          <span>{project.title}</span>
          <p className='subtitle'>{project.subtitle}</p>
          <p className='description'>{project.description}</p>
          <button onClick={()=>window.open(project.link, '_blank')}> GitHub &lt;/&gt;</button>
        </motion.div>
        
      </div>
    </div>
  </section>
}


//-------------------------------------
const Portfolio = () => {

  const ref = useRef()
  const {scrollYProgress} = useScroll({
    target:ref,
    offset: ['start end', 'end start']
  })
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20
  })

  
  return (
    <>
      <div ref={ref} className="portfolio">
        <div className="progress">
          <motion.div style={{scaleX}} className="progressBar"></motion.div>
          {/* <span>Featured Projects ...</span> */}
        </div>
        <div>
          {projects.map((item, index)=> {
            return <Single project={item} key={index}/>
          })}
        </div>
      </div>
    
    </>
  )
}
export default Portfolio