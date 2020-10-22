import React, { Component } from "react";
import './Nav.css';
import {
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
                    <button className="toggle-btn" onClick={this.Toggle}>
                    <i className="fas fa-bars"></i>
                    </button>
                    <ul className={this.state.toggle ? "nav-links show-nav" : "nav-links"}>
                    <Link to="/"><li className="nav-link">home</li></Link>
                    <Link to="/about"><li className="nav-link">about</li></Link>
                    <Link to="/code"><li className="nav-link">code</li></Link>
                    <Link to="/design"><li className="nav-link">design</li></Link>
                    <Link to="/skills/code"><li className="nav-link">skills</li></Link>
                        <li href="#">contact</li>
                    </ul>
              </nav>
          </>
        );
    }
}

