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

function App() {

  return (
    <>
      <div>

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
