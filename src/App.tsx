import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Techs from './components/Techs/Techs';

const App = () => {
  return (
    <>
      <div className="section-container">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Techs />
      <Contact />
      </div>
    </>
  );
};

export default App;