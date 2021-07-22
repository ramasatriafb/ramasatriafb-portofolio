
import './App.css';
import './index.css';
import React from 'react';
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


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: "Home"
    };
  }
  componentDidMount() {
    document.title = this.props.title
  }
  render(){
    // const [pages, setPages] = React.useState('Home');
    // console.log(pages);
    // useEffect(() => {
      AOS.init();
      AOS.refresh();
    // }, []);
    return (
      <div className="App">
          <Header pages={this.state.pages} />
          <Hero/>
          <ProjectsHero/>
          <Chance pages={this.state.pages}/>
          <About/>
          <TechSkill/>
          <Footer/>
      </div>
    );
  }
}

export default App;

