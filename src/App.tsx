import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Techs from './components/Techs/Techs';
import { eventData } from "../src/data/about.json";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="content">
      <Home />
      <About data={eventData}/>
      <Projects />
      <Techs />
      <Contact />
      </div>
    </>
  );
};

export default App;