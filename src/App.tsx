// App.tsx

import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'
import Contact from './pages/Contact'
import Works from './pages/Works'

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
