// App.tsx

import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Navbar from './Components/Navbar'

function App() {
  return (
    <div className='max-w-screen grid place-items-center bg-black'>
      <Navbar />
      <div className="h-20" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
