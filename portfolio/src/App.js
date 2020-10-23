import React from 'react';
import './App.css';
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Code from './pages/Code';
import Design from './pages/Design';
import SkillsCode from './pages/SkillsCode';
import SkillsDesign from './pages/SkillsDesign';
import Contact from './pages/Contact';

function App() {
  return (
       <Router>
    <div className="App">
     <Nav />
     <div className="container">
       <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/code" component={Code} />
          <Route exact path="/design" component={Design} />
          <Route exact path="/skills/code" component={SkillsCode} />
          <Route exact path="/skills/design" component={SkillsDesign} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/" component={Home} />
        </Switch>
     </div>
    </div>
       </Router>
  );
}

export default App;
