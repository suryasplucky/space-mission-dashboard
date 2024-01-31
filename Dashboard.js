import React, { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import "../CSS/Dashboard.css";
import "bootstrap/dist/css/bootstrap.min.css"; 

const Dashboard = () => {
  const [gridApi, setGridApi] = useState(null);
  const [rowData, setRowData] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch("https://www.ag-grid.com/example-assets/space-mission-data.json")
      .then((response) => response.json())
      .then((data) => setRowData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const onGridReady = (params) => {
    setGridApi(params.api);
  };

  const onSearchTextChange = (e) => {
    setSearchText(e.target.value);
    gridApi.setQuickFilter(e.target.value);
  };

  const columnDefs = [
    { headerName: "Mission", field: "mission" },
    { headerName: "Company", field: "company" },
    { headerName: "Location", field: "location" },
    { headerName: "Date", field: "date" },
    { headerName: "Time", field: "time" },
    { headerName: "Rocket", field: "rocket" },
    { headerName: "Price", field: "price" },
    { headerName: "Successful", field: "successful" },
  ];

  return (
    <div>
      <Header />
      <div className="d-flex" id="wrapper">
        <Sidebar />
        <div id="page-content-wrapper">
          <div className="container-fluid">
            <div className="d-flex justify-content-between py-3">
              <h2 className="mt-4">Space Mission Dashboard</h2>
              <div className="input-group mb-3" style={{width:'44%'}}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                  value={searchText}
                  onChange={onSearchTextChange}
                />
                <div className="input-group-append">
                  <span className="input-group-text" id="basic-addon2">
                    🔍
                  </span>
                </div>
              </div>
            </div>

            <div
              className="ag-theme-alpine"
              style={{ height: 400, width: "100%" }}
            >
              <AgGridReact
                columnDefs={columnDefs}
                rowData={rowData}
                onGridReady={onGridReady}
              ></AgGridReact>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
