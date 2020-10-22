import React from 'react';
import {
    Link
  } from "react-router-dom";

const SkillsCode = () => {
    return (
        <>
        <h3>skills</h3>
    <div className="skills">
        <div className="buttons">
        <Link><button className="on">code</button></Link>
        <Link to="/skills/design"><button className="off">design</button></Link>
        </div>
        <ul className="skills-list">
            <li>react</li>
            <li>javascript</li>
            <li>html</li>
            <li>css</li>
            <li>grid</li>
            <li>flexbox</li>
            <li>responsive design</li>
            <li>single page apps</li>
            <li>java</li>
            <li>spring</li>
            <li>mvc</li>
            <li>tdd</li>
            <li>junit</li>
            <li>oop</li>
            <li>restful apis</li>
            <li>git</li>
            <li>github</li>
            <li>agile (scrum)</li>
        </ul>
    </div>
    </>
    );
}

export default SkillsCode;