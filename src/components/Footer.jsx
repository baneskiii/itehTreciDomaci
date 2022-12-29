import React from "react";

function Footer() {
  const stil = { backgroundColor: "rgba(245, 230, 39, 0.8)" };
  return (
    <footer className="bg-light text-center text-lg-start fixed-bottom">
      <div className="text-center p-3" style={stil}>
        © 2023 Copyright:
        <a className="text-dark">Honey</a>
      </div>
    </footer>
  );
}

export default Footer;
