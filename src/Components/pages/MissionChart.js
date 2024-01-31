import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import '../CSS/MissionChart.css'

const MissionChart = () => {
  const [pieChartData, setPieChartData] = useState({});

  useEffect(() => {
    fetch('https://www.ag-grid.com/example-assets/space-mission-data.json')
      .then((response) => response.json())
      .then((missionData) => {
        const successfulMissions = missionData.filter((mission) => mission.successful).length;
        const unsuccessfulMissions = missionData.length - successfulMissions;

        const chartData = {
          labels: ['Successful', 'Unsuccessful'],
          datasets: [
            {
              data: [successfulMissions, unsuccessfulMissions],
              backgroundColor: ['#4CAF50', '#FF5252'],
            },
          ],
        };

        setPieChartData(chartData);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  if (!pieChartData.labels) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <div className="d-flex" id="wrapper">
        <Sidebar />
        <div id="page-content-wrapper">
          <div className="container-fluid">
            <h2 className="mt-4">Space Mission Success Chart</h2>

            <div style={{ height: 400, width: '50%' }}>
            <Pie  style={{ display: 'block', maxWidth: '100%', maxHeight: '100%', width: '50%', height: '50%', margin: 'auto' }}  data={pieChartData}
/>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MissionChart;
