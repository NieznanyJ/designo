import { useState } from 'react'
import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Home, AboutUs, WebDesign, AppDesign, GraphicsDesign, Locations, ContactUs } from './pages/pages'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import GetInTouch from './components/GetInTouch'
import ScrollToTop from './components/ScrollToTop'

function App() {
  const [count, setCount] = useState(0)

  const currentPath = useLocation().pathname;
  

  return (
    <div className="App">
      <ScrollToTop></ScrollToTop>
      <Navbar></Navbar>
      <Routes>

        <Route path='/home' element={<Home />}></Route>
        <Route path='/about-us' element={<AboutUs />}></Route>
        <Route path='/web-design' element={<WebDesign />}></Route>
        <Route path='/app-design' element={<AppDesign />}></Route>
        <Route path='/graphic-design' element={<GraphicsDesign />}></Route>
        <Route path='/locations' element={<Locations />}></Route>
        <Route path='/contact' element={<ContactUs />}></Route>


      </Routes>

      {currentPath !== "/contact" && <GetInTouch></GetInTouch>}

      <Footer pathname={currentPath}> </Footer>



    </div>
  )
}

export default App
