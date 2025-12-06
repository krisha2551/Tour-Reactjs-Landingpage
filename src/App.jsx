import './App.css'
import About from './Components/About/About'
import Activities from './Components/Activities/Activities'

import Country from './Components/Countries/Country'

import Header from './Components/Header/Header'
import Nav from './Components/Nav/Nav'

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
      {/* <Testimonials/> */}
      
     
   </>
  )
}

export default App
