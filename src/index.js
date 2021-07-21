import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Projects from './pages/Projects';
import Header from './components/Header';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
  {/* <App />  */}
    {/* <Projects /> */}
    <Router>
      {/* <Header/> */}
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/projects" component={Projects} />
        
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
