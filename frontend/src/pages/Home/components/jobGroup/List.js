import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../../../../redux/slices/jobsSlice";
import JobItem from "./JobItem";
import LoadingIcon from "../../../../assets/images/loading-icon.svg";
import { useCustomHook } from "../../utils";

function List() {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs);
  const { departmentList, sortList } = useCustomHook();
  const searchValue = useSelector((state) => state.jobs.search);
  const [selectDepartment, setSelectDepartment] = useState("");
  const [sortType, setSortType] = useState("");

  const getFilteredDataByDepartment = (department) => {
    if (department === "All") {
      dispatch(
        fetchJobs({ department: "", sort: "", searchQuery: searchValue || "" })
      );
      setSelectDepartment("");
    } else {
      dispatch(
        fetchJobs({
          department: department,
          sort: "",
          searchQuery: searchValue || "",
        })
      );
      setSelectDepartment(department);
    }
  };

  const getFilteredDataBySort = (sort) => {
    if (sort === "default") {
      dispatch(
        fetchJobs({ department: "", sort: "", searchQuery: searchValue || "" })
      );
      setSortType("");
    } else {
      dispatch(
        fetchJobs({
          department: "",
          sort: sort,
          searchQuery: searchValue || "",
        })
      );
      setSortType(sort);
    }
  };

  useEffect(() => {
    dispatch(
      fetchJobs({ department: "", sort: "", searchQuery: searchValue || "" })
    );
  }, []);

  return (
    <div className="job-list">
      <div className="list-header">
        <h1 className="results">
          Showing {jobs?.data && jobs.data.length} Jobs
        </h1>
        <div className="sorting">
          <label htmlFor="">Sort by: </label>
          <select
            onChange={(e) => getFilteredDataBySort(e.target.value)}
            name=""
            id=""
          >
            {sortList.map((item, index) => (
              <option key={index} value={item.key}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div className="sorting">
          <label htmlFor="">Department: </label>
          <select
            onChange={(e) => getFilteredDataByDepartment(e.target.value)}
            name=""
            id=""
          >
            {departmentList.map((name, index) => (
              <option key={index} value={name}>
                {name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {jobs.loading ? (
        <div className="loading-con">
          <img className="loading-img" src={LoadingIcon} alt="" />
        </div>
      ) : (
        <div className="list-container">
          {jobs.data?.map((job, index) => (
            <JobItem key={index} job={job} />
          ))}
        </div>
      )}
      {jobs.error && jobs.error}
    </div>
  );
}

export default List;
