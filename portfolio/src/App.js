import React from 'react';
import './App.css';
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
       <Router>
    <div className="App">
     <Nav />
     <div className="container">
       <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/" component={Home} />
        </Switch>
     </div>
    </div>
       </Router>
  );
}

export default App;
