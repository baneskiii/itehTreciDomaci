import React from "react";
import { useState } from "react";

const HoneyType = ({ honeyType }) => {
  return (
    <div className="card">
      <div className="row g-0">
        <div className="col-5 col-sm-4">
          <img
            src={require("../img/h" + honeyType.id + ".jpg")}
            className="img-thumbnail"
            alt="img-thumbnail"
          ></img>
        </div>
        <div className="col-7 col-sm-8">
          <div className="card-body">
            <h5 className="card-title">{honeyType.name}</h5>
            <p className="card-text">{honeyType.about}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoneyType;
