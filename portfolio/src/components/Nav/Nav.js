import React, { useState, Component } from "react";
import './Nav.css';

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
              <div className="navBar">
                    <button onClick={this.Toggle}>
                    <i class="fas fa-bars"></i>
                    </button>
                    <ul className={this.state.toggle ? "nav-links show-nav" : "nav-links"}>
                        <li href="#">home</li>
                        <li href="#">about</li>
                        <li href="#">code</li>
                        <li href="#">design</li>
                        <li href="#">skills</li>
                        <li href="#">contact</li>
                    </ul>
              </div>
          </>
        );
    }
}

