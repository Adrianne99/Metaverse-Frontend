import './App.css';
import Hero from '../src/Components/HeroOne'
import StickyNavbar from './/Components/StickyNavbarOne'
import About from '../src/Components/AboutSection'
import Tokenomics from './Components/Tokenomics'
import Roadmap from './Components/Roadmap'
import Contract from './Components/Contract';

function App() {
  return (
    <>
    <StickyNavbar />
      <Hero />
      <About />
      <Tokenomics />
      <Contract />
      <Roadmap />
    </>
  );
}

export default App;
