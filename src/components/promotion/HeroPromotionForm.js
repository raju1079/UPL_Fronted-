import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
} from "@mui/material";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import PopUpModal from "../common/PopUpModal";
import TextfieldCustom from "../common/TextfieldCustom";
import {
  fetchProgramById,
  fetchProgramId,
  fetchProgramList,
  getProgramCourseCombo,
  registerSubsciber,
  fetchSubProgramId,
} from "../redux/actions/Actions";

const HeroPromotionForm = () => {
  const fetchPrograms = useSelector(
    (state) => state.fetchAllPrograms.programs
  ); /* programs dropdown */
  const fetchProgramsById = useSelector(
    (state) => state.fectchProgramById.programById
  ); /* courses dropdownlist as per program id */
  const programCourseId = useSelector(
    (state) => state.programCourseCombo.programCourseCombination
  ); /* program course combo  */
  const subprogramId = useSelector((state) => state.fetchSubProgramId.subprogramId); /* subprogram dropdownlist as per program id */
  // console.log("Redux State:", fetchSubProgramId)
  const [item, setItem] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone_number: "",
    program_id: "",
    course_id: "",
    role_id: "",
  });

  const { username, email, phone_number } = formData;
  const [programId, setProgramId] = useState("");
  const [courseId, setCourseId] = useState("");
  const [subProgramId, setSubProgramId] = useState("");

  const handleProgramChange = (e) => {
    setProgramId(e.target.value);
    dispatch(fetchProgramById(e.target.value));
    dispatch(fetchSubProgramId(e.target.value));
    dispatch(fetchProgramId(e.target.value));
  };

  const handleCourseChange = (e) => {
    setCourseId(e.target.value);
  };
  const handleSubProgramChange = (e) => {
    setSubProgramId(e.target.value);
  };

  useEffect(() => {
    setItem(subprogramId);
  }, [item, subprogramId]);

  //pop up modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    if (formData !== '' && programId !== '' && courseId !== '') {
      setOpen(true);
      
    }
  };
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const registerData = {
    subscriber_name: formData.username,
    email: formData.email,
    phone_number: formData.phone_number,
    subprogram_id: subProgramId,
    // program_course_id: programCourseId[0]?.program_course_id,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (subprogramId !== "") {
      dispatch(registerSubsciber(registerData));
    }

    // if (programCourseId !== "") {
    //   dispatch(registerSubsciber(registerData));
    // }

    console.log("formdata", registerData);
    setFormData({
      username: "",
      email: "",
      phone_number: "",
    });
    setProgramId("");
    setSubProgramId("");
    setCourseId("");
  };

  useEffect(() => {
    if (formData !== "") {
      dispatch(
        getProgramCourseCombo({ program_id: programId, course_id: courseId })
      );
    }
  }, [formData, programId, courseId]);

  useEffect(() => {
    dispatch(fetchProgramList());
  }, [dispatch]);
  console.log("items",item)
  return (
    <>
      <form onSubmit={handleSubmit} className="mb-3">
        <Paper elevation={2} className="p-3">
          <h5>Register for latest PROGRAMS</h5>
          <Grid
            container
            spacing={2}
            sx={{ border: "1px solid rgba(0,0,0,0.125", zIndex: "3" }}
          >
            <Grid item xs={12}>
              <TextfieldCustom
                type="text"
                name="username"
                value={username}
                onChange={handleChange}
                placeholder="Username"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextfieldCustom
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="Email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextfieldCustom
                type="tel"
                name="phone_number"
                required
                value={phone_number}
                onChange={handleChange}
                placeholder="Phone Number"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Programs</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={programId}
                  defaultValue={programId}
                  label="Program name"
                  onChange={handleProgramChange}
                  required
                >
                  {fetchPrograms.map((eachItem, i) => (
                    <MenuItem
                      key={eachItem.program_id}
                      value={eachItem.program_id}
                    >
                      {eachItem.program_name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            {
              (programId !== '') ?
              <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">SubPrograms</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={subProgramId}
                  defaultValue={subProgramId}
                  label="program"
                  onChange={handleSubProgramChange}
                  required
                >
                  {item?.map((eachItem, i) => (
                    <MenuItem
                      key={eachItem.subprogram_id}
                      value={eachItem.subprogram_id}
                    >
                      {eachItem.subprogram_name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            //   <Grid item xs={12}>
            //   <FormControl fullWidth>
            //     <InputLabel id="demo-simple-select-label">Courses</InputLabel>
            //     <Select
            //       labelId="demo-simple-select-label"
            //       id="demo-simple-select"
            //       value={courseId}
            //       defaultValue={courseId}
            //       label="Course"
            //       onChange={handleCourseChange}
            //       required
            //     >
            //       {item?.map((eachItem, i) => (
            //         <MenuItem
            //           key={eachItem.course_id}
            //           value={eachItem.course_id}
            //         >
            //           {eachItem.course_name}
            //         </MenuItem>
            //       ))}
            //     </Select>
            //   </FormControl>
            // </Grid>
            : ""
            }
            <Grid item xs={12} className="text-end">
              <PopUpModal
                buttonname={"Book Now"}
                buttonClassName="btn btn-danger py-md-3 animated slideInRight"
                buttonType="submit"
                open={open}
                setOpen={setOpen}
                handleClose={handleClose}
                handleOpen={handleOpen}
              />
            </Grid>
            <Grid item xs={12} className="text-end">
              <Button variant="contained" onClick={() => navigate("/login")}>
                If you have account <span className="text-primary">Login</span>
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </form>
    </>
  );
};

export default HeroPromotionForm;
