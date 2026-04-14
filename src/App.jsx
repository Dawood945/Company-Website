import Home from './Company/Home.jsx'
import NavBar from './Company/NavBar.jsx'
import AboutUs from './Company/AboutUs.jsx'
import Gallery from './Company/Gallery.jsx'
import Service from './Company/Service.jsx'
import Team from './Company/Team.jsx'
import Contact from './Company/Contact.jsx'
import Footer from './Company/Footer.jsx'

import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function App() {
  return (
    <BrowserRouter>
      <div className='bg-slate-300 h-full'>

        {/* <Home />
        <AboutUs />
        <Gallery />
        <Service />
        <Team />
        <Contact /> */}
        
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/service' element={<Service />} />
          <Route path='/team' element={<Team />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer /> 
      </div>
    </BrowserRouter>
  )
}
