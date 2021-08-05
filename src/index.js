import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Projects from './pages/Projects';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MagicProjects from './pages/MagicProjects';
import ScrollToTop from './helper/ScrollToTop';
import SimpleReactLightbox from 'simple-react-lightbox';
import DNSMonitoring from './pages/DNSMonitoring';
import MagicDekstop from './pages/MagicDesktop';
import MyDoctorProject from './pages/MyDoctorProject';
ReactDOM.render(
  <React.StrictMode>
       <SimpleReactLightbox>
    {/* <App />  */}
    {/* <Projects /> */}
    <Router>
    <ScrollToTop/>
      <Switch>
        <Route exact path="/" render={props => (
          <App {...props} component={App} title="ramasatriafb | Frontend Developer who love mobile first design" />
        )} />
        <Route path="/projects" render={props => (
          <Projects {...props} component={Projects} title="Projects" />
        )} />
        <Route path="/magic-project" render={props => (
          <MagicProjects {...props} component={MagicProjects} title="MAGIC: Mobile Analytics Geospatial Intelligence" />
        )}/>
        <Route path="/magic-desktop-project" render={props => (
          <MagicDekstop {...props} component={MagicDekstop} title="MAGIC Desktop: Desktop Analytics Geospatial Intelligence" />
        )}/>
        <Route path="/dns-monitoring-project" render={props => (
          <DNSMonitoring {...props} component={DNSMonitoring} title="Design of DNS Traffic Monitoring System in Country-Code Top Level Domain (.id)" />
        )}/>
        <Route path="/my-doctor-project" render={props => (
          <MyDoctorProject {...props} component={MyDoctorProject} title="Doctor App Consultation for Help Everyone and Everywhere"/>
        )}/>

      </Switch>
    </Router>
    </SimpleReactLightbox>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
