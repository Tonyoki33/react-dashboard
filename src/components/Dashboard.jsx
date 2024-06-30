import React from "react";
import Widget from "./Widget";
import "../styles/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Widget title="Widget 1" />
      <Widget title="Widget 2" />
      {/* Agrega más widgets según sea necesario */}
    </div>
  );
};

export default Dashboard;
