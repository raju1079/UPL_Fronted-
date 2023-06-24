// rootReducer.js

import { combineReducers } from 'redux';
import authReducer from './auth/authReducer.js';
import { FetchPrograms } from './reducers/FetchPrograms.js';
import FetchProgramById from './reducers/FetchProgramById.js';
import { FetchCourses } from './reducers/FetchCourses.js';
import FetchCourseById from './reducers/FetchCourseById.js';
import GetMailReducer from './reducers/GetMailReducer.js';
import { GetVisitors } from './reducers/GetVisitors.js';
import { GetRole } from './reducers/GetRole.js';
import { GetUsers } from './reducers/GetUsers.js';
import { UploadProgram } from './reducers/UploadProgram.js';
import { UpdateProgramReducer } from './reducers/UpdateProgramReducer.js';
import GetVisitorById from './reducers/GetVisitorById.js';
import GetUserById from './reducers/GetUserById.js';

const rootReducer = combineReducers({
  auth: authReducer,
  fetchAllPrograms : FetchPrograms,
  fectchProgramById: FetchProgramById,
  fetchAllCourses: FetchCourses,
  fetchCourseById: FetchCourseById,
  getMailId: GetMailReducer,
  getAllVisitors: GetVisitors,
  getVisitorsById: GetVisitorById,
  getAllRoles: GetRole,
  getAllUsers: GetUsers,
  getUsersById: GetUserById,
  addNewProgram: UploadProgram,
  editProgram:UpdateProgramReducer
});

export default rootReducer;
