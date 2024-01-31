import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

function BarChart() {
  const [bargraphData, setBargraphData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://www.ag-grid.com/example-assets/space-mission-data.json")
      .then((response) => response.json())
      .then((missionData) => {
        setBargraphData(missionData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const groupByDate = () => {
    return bargraphData.reduce((groupedData, mission) => {
      const date = mission.date;
      groupedData[date] = (groupedData[date] || 0) + 1;
      return groupedData;
    }, {});
  };

  const data = {
    labels: Object.keys(groupByDate()),
    datasets: [
      {
        label: "Space Missions Count",
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(75,192,192,0.4)",
        hoverBorderColor: "rgba(75,192,192,1)",
        data: Object.values(groupByDate()),
      },
    ],
  };

  return (
    <div>
      <Header />
      <div className="d-flex" id="wrapper">
        <Sidebar />
        <div id="page-content-wrapper">
          <div className="container-fluid">
            <h2 className="mt-4">Space Mission Bar Graph</h2>
            {loading ? (
              <div>Loading...</div>
            ) : (
              <Bar data={data} />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BarChart;
