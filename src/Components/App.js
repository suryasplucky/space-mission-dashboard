import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Components/Auth/Login";
import Dashboard from "./Components/pages/Dashboard";
import MissionChart from "./Components/pages/MissionChart";
import BarChart from "./Components/pages/BarChart";
import Cards from "./Components/pages/Cards";

function App() {
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    fetch("https://www.ag-grid.com/example-assets/space-mission-data.json")
      .then((response) => response.json())
      .then((data) => setRowData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard rowData={rowData} />} />
        <Route path="/charts" element={<MissionChart/>} />
        <Route path="/barchart" element={<BarChart/>}/>
        <Route path="/datacards" element={<Cards/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
