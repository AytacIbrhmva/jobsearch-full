import React, { useState } from "react";
import { TextField } from "@mui/material";
import "./regionDropdown.css";
import { useCustomHook } from "../../../../utils";

const Department = ({ handleChange, jobModalData }) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const { departmentList } = useCustomHook();
  const selectDepartment = (item) => {
    handleChange("department", item);
    setOpenDropdown(false);
  };
  return (
    <>
      <div className="class-input">
        <div className="class-field">
          <TextField
            sx={{
              "& input": {
                fontSize: "12px",
                marginRight: "32px",
              },
              marginTop: "20px",
              marginBottom: "24px",
              "& fieldset": {
                "& legend": {
                  "& span": {
                    fontSize: "7px",
                  },
                },
              },
            }}
            InputLabelProps={{
              style: { fontSize: "12px", color: "#3F3F3F" },
            }}
            fullWidth
            label="Department"
            name="class"
            autoComplete="off"
            value={jobModalData?.department || ""}
          />
          <div
            className="dropdown-icon"
            onClick={() => setOpenDropdown(!openDropdown)}
          >
            <svg
              className={!openDropdown ? "down" : "up"}
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.92 9.4502L13.4 15.9702C12.63 16.7402 11.37 16.7402 10.6 15.9702L4.07999 9.4502"
                stroke="#5D5D5D"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <ul
          className={`create-update-modal-dropdown where-coming ${
            openDropdown ? "active" : ""
          }`}
        >
          {departmentList.filter((item) => item !== 'All').map((item, index) => (
            <li key={index} onClick={() => selectDepartment(item)}>
              <h4>{item}</h4>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Department;
