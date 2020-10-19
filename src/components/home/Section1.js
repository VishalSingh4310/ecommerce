import React from "react";
import "./section1.css";
import { Link } from "react-router-dom";

const Section1 = (props) => {
  return (
    <div className="section1-container">
      <div className="section1-subContainer">
        {props.categories.map((item) => {
          return (
            <Link to={`/${item.name}`} key={item.name}>
              <div className="section1-box">
                <img className="box-img" src={item.image} alt={item.name} />
                <h2 className="box-content">{item.name}</h2>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Section1;
