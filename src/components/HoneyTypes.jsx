import React from "react";
import HoneyType from "./HoneyType";
import Header from "./Header";
import Footer from "./Footer";

const HoneyTypes = ({ honeyTypes1, honeyTypes2, changePage, page }) => {
  const boja = {
    color: "black",
  };
  return (
    <>
      <Header />
      <div className="d-flex justify-content-center bd-highlight mb-2">
        <div className="p-2 bd-highlight">
          <h1 className="display-5" style={boja}>
            These are the types of honey that exist:
          </h1>
        </div>
      </div>
      {page == 1 ? (
        <>
          {honeyTypes1.map((type) => (
            <HoneyType honeyType={type} key={type.id} />
          ))}
        </>
      ) : (
        <>
          {honeyTypes2.map((type) => (
            <HoneyType honeyType={type} key={type.id} />
          ))}
        </>
      )}
      <div className="d-flex justify-content-center bd-highlight mb-2">
        <div className="p-2 bd-highlight">
          <div
            className="btn-toolbar"
            role="toolbar"
            aria-label="Toolbar with button groups"
          >
            <div
              className="btn-group me-2"
              role="group"
              aria-label="First group"
            >
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => changePage(1)}
              >
                1
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => changePage(2)}
              >
                2
              </button>
            </div>
          </div>
        </div>
      </div>
      &nbsp;
      <Footer />
    </>
  );
};

export default HoneyTypes;
