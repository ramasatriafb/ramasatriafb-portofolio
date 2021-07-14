
import './App.css';
import './index.css';
import React, { useEffect }from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import "aos/dist/aos.css";
import Header from './components/Header';
import Hero from './components/Hero';
import Chance from './components/Chance';
import ProjectsHero from './components/ProjectsHero';
import About from './components/About';
import TechSkill from './components/TechSkill';
import Footer from './components/Footer';

function App() {
  const [pages, setPages] = React.useState('Home');
  console.log(pages);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="App">
        <Header pages={pages}/>
        <Hero/>
        <ProjectsHero/>
        <Chance pages={pages}/>
        <About/>
        <TechSkill/>
        <Footer/>
    </div>
  );
}

export default App;
