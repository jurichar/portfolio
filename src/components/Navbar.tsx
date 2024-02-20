// Components/Navbar.tsx

import { Link } from 'react-router-dom'
// import svg from '../assets/logo.svg'
import { ReactSVG } from 'react-svg'

function Navbar() {
  return (
    <nav className="fixed w-screen bg-black text-white">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <ReactSVG src="/assets/icons/plus.svg" />
    </nav>
  )
}

export default Navbar