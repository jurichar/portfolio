import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Techs from './components/Techs/Techs';

// import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Techs />
      <Contact />
    </>
  );
};

export default App;