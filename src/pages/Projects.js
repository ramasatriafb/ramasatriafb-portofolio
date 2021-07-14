import React, {useEffect} from 'react';
import '../App.css';
import '../index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import ProjectList from '../components/ProjectList';
import Chance from '../components/Chance';
import Footer from '../components/Footer';
import AOS from 'aos';
import "aos/dist/aos.css";
function Projects() {
    
const [pages, setPages] = React.useState('Projects');
console.log(pages);
useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="App">
        <Header pages={pages}/>
        <ProjectList/>
        <Chance pages={pages}/>
        <Footer/>
    </div>
  );
}

export default Projects;
