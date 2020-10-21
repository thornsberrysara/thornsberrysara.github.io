import React from "react";
import "./Card.css";

const Card = ({ title, description, tools }) => {
  return (
    <>
    <div className="card-container">
      <div className="card">
        <h3 className="title">{title}</h3>
        <p>{description}</p>
      </div>
      <div className="tools">
        {(tools = tools.map(tool => <li className="tools-list">{tool}</li>))}
      </div>
    </div>
    </>
  );
};

export default Card;
