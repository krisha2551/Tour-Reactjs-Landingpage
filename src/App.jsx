import './App.css'
import About from './Components/About/About'
import Activities from './Components/Activities/Activities'
import Blog from './Components/Blog/Blog'
import Country from './Components/Countries/Country'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Nav from './Components/Nav/Nav'
import Testimonials from './Components/Testimonials/Testimonials'
import Tours from './Components/Tours/Tours'

function App() {

  return (
   <>
      <Nav/>
      <Header/>
      <About/>
      <Tours/>
      <Country/>
      <Activities/>
      <Testimonials/>
      <Blog/>
      <Footer/>
   </>
  )
}

export default App
