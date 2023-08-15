import React from "react";

function Display({ children }) {
  return (
    <div className="display" id="display">
      {children}
    </div>
  );
}

export default Display;
