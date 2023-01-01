import React from "react";

function Footer() {
  const stil = { backgroundColor: "rgba(245, 230, 39, 0.8)" };
  return (
    <footer className="bg-light text-center text-lg-start fixed-bottom">
      <div className="text-center p-2" style={stil}>
        © 2023 Copyright: Honey
      </div>
    </footer>
  );
}

export default Footer;
