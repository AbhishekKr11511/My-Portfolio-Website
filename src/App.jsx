import './app.scss'
import Navbar from './Components/Navbar/Navbar'
import Sidebar from './Components/Sidebar/Sidebar'
import Hero from './Components/Hero/Hero'
import Parallax from './Components/Parallax/Parallax'
import Resume from './Components/Resume/Resume'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'
import Skills from './Components/Skills/Skills'
import HireMe from './Components/HireMe/HireMe'
import AnimatedCursor from "react-animated-cursor";

function App() {

  return (
    <>
      <div>
        <AnimatedCursor
      innerSize={8}
      outerSize={35}
      innerScale={1}
      outerScale={2}
      outerAlpha={0}
      hasBlendMode={true}
      innerStyle={{
        backgroundColor: 'white',
      }}
      outerStyle={{
        border: '3px solid orange'
      }}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link',
      ]}
    />
        <section className='bg-purple'>
          <Sidebar/>
          <Navbar/>
          <Hero/>
        </section>
        <section className='bg-blue'><Parallax/></section>
        <section className='bg-pink'><Resume/></section>
        <section><Skills/></section>
        <section><HireMe/></section>
        <section className='bg-yellow'><Parallax type={'services'}/></section>
        <Portfolio/>
        <section className='bg-seagreen'><Contact/></section>
      </div>
    </>
  )
}

export default App
