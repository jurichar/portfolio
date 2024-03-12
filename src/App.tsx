// App.tsx

import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Navbar from './components/Navbar'
import Contact from './Pages/Contact'
import Works from './Pages/Works'
import Resume from './Pages/Resume'

function App() {
  return (
    <div className='max-w-screen grid place-items-center bg-black'>
      <Navbar />
      <div className="h-20" />
      <div className="z-[90] h-40 w-full bg-gradient-to-t from-transparent to-black blur-lg fixed -top-10 pointer-events-none" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <div className="h-20 pointer-events-none" />
      <div className="fixed top-0 left-0 z-50 pointer-events-none">
      </div>
    </div>
  )
}

export default App
