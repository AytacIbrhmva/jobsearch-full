const asyncHandler = require("express-async-handler");
const Job = require("../models/jobModel");

//@ Get all jons
//@route GET /api/jobs
//@access public
const getJobs = asyncHandler(async (req, res) => {
  const { department, sort, searchQuery } = req.query;

  try {
    const filterObj = {};
    const sortObj = {};

    if (sort === "salaryMinToMax") sortObj.salary = 1;
    if (sort === "salaryMaxToMin") sortObj.salary = -1;
    if (sort === "positionNameAtoZ") sortObj.title = -1;
    if (department) filterObj.department = department;
    if (searchQuery && searchQuery.trim() !== "") {
      const regexSearchQuery = new RegExp(searchQuery, "i");
      const jobs = await Job.find({
        title: { $regex: regexSearchQuery },
        ...filterObj,
      }).sort(sortObj);
      res.status(200).json(jobs);
    } else {
      const jobs = await Job.find(filterObj).sort(sortObj);
      res.status(200).json(jobs);
    }
  } catch (err) {
    res.status(500).json({ message: { error: err.message } });
  }

  // const jobs = await Job.find();
  // res.status(200).json(jobs);
});

//@ Get all jons
//@route CREATE /api/jobs
//@access public
const createJob = asyncHandler(async (req, res) => {
  const {
    title,
    company,
    description,
    salary,
    currency,
    workType,
    experience,
    department,
  } = req.body;
  if (
    !title ||
    !company ||
    !description ||
    !salary ||
    !currency ||
    !workType ||
    !experience ||
    !department
  ) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }

  const job = await Job.create({
    title,
    company,
    description,
    salary,
    currency,
    workType,
    experience,
    department,
  });
  res.status(201).json(job);
});

//@ Update all jons
//@route UPDATE /api/jobs/:id
//@access public
const updateJob = asyncHandler(async (req, res) => {
  const job = await Job.findById(req.params.id);
  if (!job) {
    res.status(404);
    throw new Error("Job not found");
  }
  const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedJob);
});

//@ Delete all jons
//@route DELETE /api/jobs/:id
//@access public
const deleteJob = asyncHandler(async (req, res) => {
  const job = await Job.findById(req.params.id);
  if (!job) {
    res.status(404);
    throw new Error("Job not found");
  }
  await Job.deleteOne({ _id: req.params.id });
  res.status(200).json(job);
});

module.exports = { getJobs, createJob, updateJob, deleteJob };
