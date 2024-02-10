import { TextField } from "@mui/material";


export default function InputField({
  jobModalData,
  inputName,
  handleChange
}) {

  return (
    <div>
      <TextField
        sx={{
          "& input": {
            fontSize: "12px",
          },
          marginTop: inputName === "title" ? 0 : "24px",
          "& fieldset": {
            "& legend": {
              "& span": {
                fontSize: "7px"
              }
            }
          }
        }}
        InputLabelProps={{
          style: {
            fontSize: "12px",
            color: "#3F3F3F",
          },
        }}
        fullWidth
        id={inputName}
        name={inputName}
        type={inputName === "salary" ? "number" : "text"}
        label={inputName}
        value={jobModalData[inputName] || ""}
        onChange={(e) => handleChange(inputName, e.target.value)}
      />
    </div>
  );
}
