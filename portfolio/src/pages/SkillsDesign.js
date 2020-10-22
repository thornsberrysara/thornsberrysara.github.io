import React from 'react';
import {
    Link
  } from "react-router-dom";

const SkillsDesign = () => {
    return (
        <>
        <h3>skills</h3>
    <div className="skills">
        <div className="buttons">
        <Link to="/skills/code"><button className="off">code</button></Link>
        <Link><button className="on">design</button></Link>
        </div>
        <ul className="skills-list">
            <li>figma</li>
            <li>adobe xd</li>
            <li>wireframing</li>
            <li>prototyping</li>
            <li>typography</li>
            <li>design trends</li>
            <li>animations</li>
            <li>color theory</li>
        </ul>
    </div>
    </>
    );
}

export default SkillsDesign;