import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Homepage() {
  const boja = {
    color: "rgba(245, 230, 39, 0.8)",
  };
  return (
    <>
      <Header />
      <div className="d-flex justify-content-center bd-highlight mb-2">
        <div className="p-2 bd-highlight">
          <h1 className="display-2" style={boja}>
            Welcome to Honey!
          </h1>
        </div>
      </div>
      <div className="d-flex justify-content-center bd-highlight mb-2">
        <div className="p-2 bd-highlight">
          <img
            src={require("../img/bg.jpg")}
            className="img-thumbnail"
            alt="img-thumbnail"
          ></img>
        </div>
      </div>
      <div>&nbsp;</div>
      <div>&nbsp;</div>
      <Footer />
    </>
  );
}

export default Homepage;
