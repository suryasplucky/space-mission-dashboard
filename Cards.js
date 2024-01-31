import React, { useEffect, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import '../CSS/Header.css';

function Cards() {
  const [cardData, setCardData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(10);

  useEffect(() => {
    fetch("https://www.ag-grid.com/example-assets/space-mission-data.json")
      .then((response) => response.json())
      .then((missionData) => {
        setCardData(missionData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = cardData.slice(indexOfFirstRecord, indexOfLastRecord);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleRecordsPerPageChange = (event) => {
    setRecordsPerPage(parseInt(event.target.value));
    setCurrentPage(1);
  };

  const pageNumbers = Array.from({ length: Math.ceil(cardData.length / recordsPerPage) }, (_, index) => index + 1);
  const maxPageNumbers = 10;

  const startPage = Math.max(1, Math.min(currentPage - Math.floor(maxPageNumbers / 2), pageNumbers.length - maxPageNumbers + 1));
  const endPage = Math.min(startPage + maxPageNumbers - 1, pageNumbers.length);

  const displayedPageNumbers = pageNumbers.slice(startPage - 1, endPage);

  return (
    <div>
      <Header />
      <div className="d-flex" id="wrapper">
        <Sidebar />
        <div id="page-content-wrapper">
          <h2 className="mt-4">Space Mission Cards</h2>

          <div className="mb-3">
            <label htmlFor="recordsPerPage">Records per page : </label> &nbsp;&nbsp;&nbsp;
            <select
              id="recordsPerPage"
              value={recordsPerPage}
              onChange={handleRecordsPerPageChange}
            >
              <option value={10}>Range records 10</option>
              <option value={20}>Range records 20</option>
              <option value={30}>Range records 30</option>
            </select>
          </div>

          <div className="card-container">
            {currentRecords.map((mission, index) => (
              <div key={index} className="maincard">
                <div className="mainhead">{mission.mission}</div>
                <div className="mainbody d-flex justify-content-between">
                  <p>
                    <strong>Company:</strong> {mission.company}
                  </p>
                  <p>
                    <strong>Location:</strong> {mission.location}
                  </p>
                  <p>
                    <strong>Date:</strong> {mission.date}
                  </p>
                  <p>
                    <strong>Time:</strong> {mission.time}
                  </p>
                  <p>
                    <strong>Rocket:</strong> {mission.rocket}
                  </p>
                  <p>
                    <strong>Price:</strong> {mission.price}
                  </p>
                  <p>
                    <strong>Successful:</strong>{" "}
                    {mission.successful ? "Yes" : "No"}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="pagination">

            <button disabled={currentPage === 1} onClick={() => paginate(currentPage - 1)}>
              Prev
            </button>

            {displayedPageNumbers.map((pageNumber) => (
              <button key={pageNumber} onClick={() => paginate(pageNumber)} className={currentPage === pageNumber ? "active" : ""}>
                {pageNumber}
              </button>
            ))}

            <button disabled={currentPage === pageNumbers.length} onClick={() => paginate(currentPage + 1)}>
              Next
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cards;
