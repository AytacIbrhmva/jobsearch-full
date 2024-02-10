import React, { useEffect, useRef, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Typography } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import {
  setCategory,
  removeCategory,
} from "../../../../../redux/slices/jobsSlice";

export default function Single({ category }) {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs.data);
  const categoryState = useSelector((state) => state.jobs.category);

  let amount_job = jobs?.filter((job) =>
    job.category?.toLowerCase().includes(category?.toLowerCase())
  ).length;
  // let amount_job = 1
  const [checkedValue, setCheckedValue] = useState();
  const handleChange = (e) => {
    setCheckedValue(e.target.checked);
  };

  useEffect(() => {
    checkedValue && dispatch(setCategory(category));

    let index = categoryState.indexOf(category);
    !checkedValue && dispatch(removeCategory(index));
  }, [checkedValue]);

  return (
    <div className="single">
      <FormControlLabel
        control={
          <Checkbox
            // checked={checkedValue }
            onChange={(e) => handleChange(e)}
            size="small"
            name="category"
            sx={{
              "& .MuiSvgIcon-root": {
                fontSize: 20,
                width: 20,
                height: 20,
              },
            }}
          />
        }
        label={
          <Typography
            sx={{
              fontSize: 14,
              fontWeight: 500,
              fontFamily: "unset",
              fontFamily: "Poppins",
            }}
          >
            {category}
          </Typography>
        }
      ></FormControlLabel>
      <div className={checkedValue ? "amount active" : "amount"}>
        {amount_job}
      </div>
    </div>
  );
}
