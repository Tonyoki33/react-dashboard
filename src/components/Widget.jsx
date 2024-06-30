import React from "react";
import "../styles/Widget.css";

const Widget = ({ title }) => {
  return (
    <div className="widget">
      <h3>{title}</h3>
      {/* Aquí puedes agregar el contenido del widget */}
    </div>
  );
};

export default Widget;
