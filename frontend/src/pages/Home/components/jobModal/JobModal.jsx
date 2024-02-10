import { useEffect, useState, useCallback } from "react";
import moment from "moment";
import { ReactComponent as CloseBtn } from "../../../../assets/icons/Icon.svg";
import { Box } from "@mui/material";
import InputField from "./components/Inputs/InputField";
import SubmitBtn from "./components/Buttons/SubmitBtn";
import DeleteItemModal from "../DeleteItemModal/DeleteItemModal";
import { setModalData } from "../../../../redux/slices/jobsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useCustomHook } from "../../utils";
import Department from "./components/InputDropdowns/Department";

const JobModal = () => {
  const dispatch = useDispatch();
  const { modalData } = useSelector((state) => state.jobs);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const inputNameArr1 = [
    "title",
    "company",
    "description",
    "salary",
    "currency",
    "workType",
    "experience",
  ];

  const deleteItem = () => {};
  const closeModal = () => {
    dispatch(setModalData({ data: "", openModal: false }));
  };

  const handleChange = (key, value) => {
    dispatch(
      setModalData({
        data: { ...modalData.data, [key]: value },
        openModal: true,
      })
    );
  };

  return (
    <>
      <div className="create-update-modal-con admin-modal">
        <div className="create-update-modal">
          <div className="create-update-modal-head">
            <h2>{modalData.data?._id ? "Create Job" : "Update Job"}</h2>
            <CloseBtn onClick={closeModal} />
          </div>

          <Box
            onSubmit={(e) => e.preventDefault()}
            component="form"
            sx={{
              width: 500,
              maxWidth: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div className="create-update-modal-form">
              {inputNameArr1.map((name, index) => (
                <InputField
                  key={index}
                  inputName={name}
                  jobModalData={modalData.data}
                  handleChange={handleChange}
                />
              ))}
              <Department
                jobModalData={modalData.data}
                handleChange={handleChange}
              />
            </div>
          </Box>

          {modalData.data?._id ? (
            <SubmitBtn
              funcType="update"
              setShowDeleteModal={setShowDeleteModal}
              jobModalData={modalData.data}
            />
          ) : (
            <SubmitBtn
              funcType="create"
              setShowDeleteModal={setShowDeleteModal}
              jobModalData={modalData.data}
            />
          )}

          {modalData.data?._id && (
            <div className="joined-time">
              Qoşuldu: {moment(modalData.data.createdAt).format("YYYY.MM.DD")}
            </div>
          )}
          {showDeleteModal && (
            <DeleteItemModal
              setShowDeleteModal={setShowDeleteModal}
              deleteItem={deleteItem}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default JobModal;
