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

        <Route path='https://nieznanyj.github.io/designo/' element={<Home />}></Route>
        <Route path='https://github.com/NieznanyJ/designo/about-us' element={<AboutUs />}></Route>
        <Route path='https://github.com/NieznanyJ/designo/web-design' element={<WebDesign />}></Route>
        <Route path='https://github.com/NieznanyJ/designo/app-design' element={<AppDesign />}></Route>
        <Route path='https://github.com/NieznanyJ/designo/graphic-design' element={<GraphicsDesign />}></Route>
        <Route path='https://github.com/NieznanyJ/designo/locations' element={<Locations />}></Route>
        <Route path='https://github.com/NieznanyJ/designo/contact' element={<ContactUs />}></Route>


      </Routes>

      {currentPath !== "/contact" && <GetInTouch></GetInTouch>}

      <Footer pathname={currentPath}> </Footer>



    </div>
  )
}

export default App
