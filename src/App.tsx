// App.tsx

import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Navbar from './Components/Navbar'
import Contact from './Pages/Contact'
import Works from './Pages/Works'

function App() {
  return (
    <div className='max-w-screen grid place-items-center bg-black'>
      <Navbar />
      <div className="h-20" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <div className="h-20" />
    </div>
  )
}

export default App
