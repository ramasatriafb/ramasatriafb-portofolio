import React from 'react';
import '../App.css';
import '../index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import ProjectList from '../components/ProjectList';
import Chance from '../components/Chance';
import Footer from '../components/Footer';
import AOS from 'aos';
import "aos/dist/aos.css";
class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: "Projects"
    };
  }
  componentDidMount() {
    document.title = this.props.title
  }
  render(){
    AOS.init();
    AOS.refresh();
    return (
      <div className="App">
          <Header pages={this.state.pages}/>
          <ProjectList/>
          <Chance pages={this.state.pages}/>
          <Footer/>
      </div>
    );
  }
}

export default Projects;
