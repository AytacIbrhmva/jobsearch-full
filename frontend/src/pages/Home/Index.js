import React, { useState } from "react";
import Searchbar from "./components/searchBar/Searchbar";
import Sidebar from "./components/sidebar/Sidebar";
import JobList from "./components/jobGroup/List";
import JobModal from "./components/jobModal/JobModal";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const { modalData } = useSelector((state) => state.jobs);
  return (
    <div className="home">
      <Searchbar />
      <div className="container">
        <div className="main">
          {/* <Sidebar /> */}
          <JobList />
        </div>
      </div>
      {modalData.openModal && <JobModal />}
    </div>
  );
}

export default Home;


// http://localhost:4002