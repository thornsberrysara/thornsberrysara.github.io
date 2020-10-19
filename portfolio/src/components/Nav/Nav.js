import React, { Component } from "react";
import './Nav.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default class App extends Component {
    state = {
        toggle:false
    }
    Toggle = () => {
        this.setState({toggle:!this.state.toggle})
    }
    render() {
        return (
          <>
              <nav>
                    <button onClick={this.Toggle}>
                    <i class="fas fa-bars"></i>
                    </button>
                    <ul className={this.state.toggle ? "nav-links show-nav" : "nav-links"}>
                    <Link to="/"><li>home</li></Link>
                    <Link to="/about"><li>about</li></Link>
                        <li href="#">code</li>
                        <li href="#">design</li>
                        <li href="#">skills</li>
                        <li href="#">contact</li>
                    </ul>
              </nav>
          </>
        );
    }
}

