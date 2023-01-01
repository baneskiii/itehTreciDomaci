import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import HoneyType from "./HoneyType";

const Origin = ({
  honeyCanada,
  honeyUS,
  honeyFrance,
  honeyAustralia,
  origin,
  changeOrigin,
}) => {
  function changeCoutry(country) {
    changeOrigin(country);
  }
  return (
    <>
      <Header />
      <div className="d-flex justify-content-center bd-highlight mb-2">
        <div className="p-2 bd-highlight">
          <div
            className="btn-group"
            role="group"
            aria-label="Basic radio toggle button group"
          >
            <input
              type="radio"
              className="btn-check"
              name="btnGroupRadio"
              id="btnRadio1"
              autoComplete="off"
              checked=""
              onChange={() => changeCoutry("Canada")}
            ></input>
            <label className="btn btn-outline-primary" htmlFor="btnRadio1">
              Canada
            </label>

            <input
              type="radio"
              className="btn-check"
              name="btnGroupRadio"
              id="btnRadio2"
              autoComplete="off"
              onChange={() => changeCoutry("US")}
            ></input>
            <label className="btn btn-outline-primary" htmlFor="btnRadio2">
              United States
            </label>

            <input
              type="radio"
              className="btn-check"
              name="btnGroupRadio"
              id="btnRadio3"
              autoComplete="off"
              onChange={() => changeCoutry("France")}
            ></input>
            <label className="btn btn-outline-primary" htmlFor="btnRadio3">
              France
            </label>

            <input
              type="radio"
              className="btn-check"
              name="btnGroupRadio"
              id="btnRadio4"
              autoComplete="off"
              onChange={() => changeCoutry("Australia")}
            ></input>
            <label className="btn btn-outline-primary" htmlFor="btnRadio4">
              Australia
            </label>
          </div>
        </div>
      </div>
      <div>&nbsp;</div>
      {origin == "Canada" ? (
        <>
          {honeyCanada.map((type) => (
            <HoneyType honeyType={type} key={type.id} />
          ))}
        </>
      ) : (
        <></>
      )}
      {origin == "US" ? (
        <>
          {honeyUS.map((type) => (
            <HoneyType honeyType={type} key={type.id} />
          ))}
        </>
      ) : (
        <></>
      )}
      {origin == "France" ? (
        <>
          {honeyFrance.map((type) => (
            <HoneyType honeyType={type} key={type.id} />
          ))}
        </>
      ) : (
        <></>
      )}
      {origin == "Australia" ? (
        <>
          {honeyAustralia.map((type) => (
            <HoneyType honeyType={type} key={type.id} />
          ))}
        </>
      ) : (
        <></>
      )}
      <Footer />
    </>
  );
};

export default Origin;
