import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as DeleteIcon } from "../../../../assets/icons/Delete button.svg";
import { ReactComponent as EditIcon } from "../../../../assets/icons/edit-icon.svg";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs, setModalData } from "../../../../redux/slices/jobsSlice";

function Single({ job }) {
  const dispatch = useDispatch();
  const searchValue = useSelector(state => state.jobs.search);
  const updateJob = () => {
    dispatch(
      setModalData({
        data: job,
        openModal: true,
      })
    );
  }
  const deleteJob = async () => {
    const { data } = await axios.delete(
      `${process.env.REACT_APP_API}/api/jobs/${job._id}`
    );
    dispatch(fetchJobs({department: "", sort: "", searchQuery: searchValue || ''}));
  };

  return (
    <div className="job-card">
      {/* <img className='card-top-img' src={job.company.thumb} alt="company img"/> */}
      <div className="card-body">
        <div className="card-head">
          <div className="delete-icon" onClick={() => deleteJob()}><DeleteIcon /></div>
          <div className="edit-icon" onClick={() => updateJob()}><EditIcon /></div>
        </div>
        <div className="card-title">
          <h4 className="title">{job.title}</h4>
          <h4 className="title">{job.salary}₼</h4>
          <h4 className="subtitle">{job.company}</h4>
        </div>
        <p className="desc">{job.department}</p>
        <p className="desc">{job.description}</p>
        <div className="job-details">
          <div className="col">{job.workType}</div>
          <div className="col">{job.experience}</div>
          <div className="col">{job.salary}₼</div>
        </div>
        <Link to="/" className="apply-btn">
          Apply Now
        </Link>
      </div>
    </div>
  );
}

export default Single;
