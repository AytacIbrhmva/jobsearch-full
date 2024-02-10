import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  category: [],
  modalData: {data: '', openModal: false},
  search: "",
  loading: false,
  btnLoading: false,
  error: "",
};

export const fetchJobs = createAsyncThunk("fetchJobs", async ({department, sort, searchQuery}) => {
//   const response = await axios.get('https://jobsearch-json-server-deploy.onrender.com/jobList');
//   return response.data;
  const {data} = await axios.get(`https://job-search-server-new.vercel.app/api/jobs/?department=${department}&sort=${sort}&searchQuery=${searchQuery}`);
  return data;
});

export const createJobAction = createAsyncThunk("createJobAction", async (modalData) => {
  //   const response = await axios.get('https://jobsearch-json-server-deploy.onrender.com/jobList');
  //   return response.data;
    const {data} = await axios.post(`https://job-search-server-new.vercel.app/api/jobs/`, modalData);
    return data;
  });

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category.push(action.payload);
    },
    removeCategory: (state, action) => {
      state.category.splice(action.payload, 1);
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setModalData: (state, action) => {
        state.modalData = action.payload
    }
  },
  extraReducers: (builder) => {

    // get
    builder.addCase(fetchJobs.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchJobs.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchJobs.rejected, (state, action) => {
      state.loading = false;
      state.error = "Error fetching jobs data";
    })

    // builder.addCase(createJobAction.pending, (state, action) => {
    //   state.btnLoading = true;
    //   state.error = "";
    // }),
    // builder.addCase(createJobAction.fulfilled, (state, action) => {
    //   state.modalData = {data: '', openModal: false};
    //   // state.data = {...state, action.payload}
    //   state.btnLoading = false;
    // }),
    // builder.addCase(createJobAction.rejected, (state, action) => {
    //   state.btnLoading = false;
    //   state.error = "Error create job";
    // })
  },
});

export default jobsSlice.reducer;
export const { setCategory,setModalData, removeCategory, setSearch } = jobsSlice.actions;
