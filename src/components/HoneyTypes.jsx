import React from "react";
import HoneyType from "./HoneyType";

const HoneyTypes = ({ honeyTypes1, honeyTypes2, changePage, page }) => {
  const boja = {
    color: "black",
  };
  return (
    <>
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
            class="btn-toolbar"
            role="toolbar"
            aria-label="Toolbar with button groups"
          >
            <div class="btn-group me-2" role="group" aria-label="First group">
              <button
                type="button"
                class="btn btn-primary"
                onClick={() => changePage(1)}
              >
                1
              </button>
              <button
                type="button"
                class="btn btn-primary"
                onClick={() => changePage(2)}
              >
                2
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HoneyTypes;
