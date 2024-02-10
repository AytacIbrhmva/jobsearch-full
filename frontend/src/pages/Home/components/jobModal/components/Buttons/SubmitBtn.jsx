import axios from "axios";
import { ReactComponent as DeleteIcon } from "../../../../../../assets/icons/Delete button.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchJobs,
  createJobAction,
  setModalData,
} from "../../../../../../redux/slices/jobsSlice";

const SubmitBtn = ({ funcType, setShowDeleteModal, jobModalData }) => {
  const dispatch = useDispatch();
  const searchValue = useSelector(state => state.jobs.search);
  const createJob = async () => {
    await axios.post(`https://jobsearch-backend-app.vercel.app/api/jobs/`, jobModalData);
    dispatch(fetchJobs({department: "", sort: "",  searchQuery: searchValue || ''}));
    dispatch(setModalData({ data: "", openModal: false }));
  };
  const updateJob = async () => {
    await axios.put(`https://jobsearch-backend-app.vercel.app/api/jobs/${jobModalData._id}`, jobModalData);
    dispatch(fetchJobs({department: "", sort: "",  searchQuery: searchValue || ''}));
    dispatch(setModalData({ data: "", openModal: false }));
  };
  const jobCreate = () => {
    if (funcType === "update") {
      updateJob();
    } else {
      createJob();
    }
  };

  return (
    <div>
      {funcType === "update" ? (
        <div className="create-update-modal-btn update ">
          <button onClick={jobCreate}>
            {funcType === "update" ? "Update" : "Create"}
          </button>
          <div className="delete-income-modal-btn">
            <DeleteIcon onClick={() => setShowDeleteModal(true)} />
          </div>
          <button
            className="delete-income-modal-btn-mobile"
            onClick={() => setShowDeleteModal(true)}
          >
            Sil
          </button>
        </div>
      ) : (
        <div className="create-update-modal-btn">
          <button onClick={jobCreate}>
            {funcType === "update" ? "Update" : "Create"}
          </button>
        </div>
      )}
    </div>
  );
};

export default SubmitBtn;
