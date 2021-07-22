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
ReactDOM.render(
  <React.StrictMode>
       <SimpleReactLightbox>
    {/* <App />  */}
    {/* <Projects /> */}
    <Router>
    <ScrollToTop/>
      <Switch>
        <Route exact path="/" render={props => (
          <App {...props} component={App} title="ramasatriafb." />
        )} />
        <Route path="/projects" render={props => (
          <Projects {...props} component={Projects} title="Projects" />
        )} />
        <Route path="/magic-projects" render={props => (
          <MagicProjects {...props} component={MagicProjects} title="MAGIC: Mobile Analytics Geospatial Intelligence" />
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
