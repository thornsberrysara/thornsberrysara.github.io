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
                    <Link to="/" onClick={this.Toggle}><li className="nav-link">home</li></Link>
                    <Link to="/about" onClick={this.Toggle}><li className="nav-link">about</li></Link>
                    <Link to="/code" onClick={this.Toggle}><li className="nav-link">code</li></Link>
                    <Link to="/design" onClick={this.Toggle}><li className="nav-link">design</li></Link>
                    <Link to="/skills/code" onClick={this.Toggle}><li className="nav-link">skills</li></Link>
                    <Link to="/contact" onClick={this.Toggle}><li className="nav-link">contact</li></Link>
                    </ul>
              </nav>
          </>
        );
    }
}

