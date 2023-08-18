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
import { UpdateUserReducer } from './reducers/UpdateUserReducer.js';
import FetchProgramId from './reducers/FetchProgramId.js';
import FetchSubProgramId from './reducers/FetchSubProgramId.js';
import { FetchProgramWithCourse } from './reducers/FetchProgramWithCourse.js';
import { UpdateUserStatus } from './reducers/UpdateUserStatus.js';
import { GetStatusList } from './reducers/GetStatusList.js';
import GetUserByStatus from './reducers/GetUserByStatus.js';
import GetVisitorsByStatus from './reducers/GetVisitorsByStatus.js';
import { ProgramCourseCombination } from './reducers/ProgramCourseCombination.js';
import { SubscriberReducer } from './reducers/SubscriberReducer.js';
import { GetLessons } from './reducers/GetLessons.js';
import { GetUnits } from './reducers/GetUnits.js';
import { GetCourseWithLesson } from './reducers/GetCourseWithLesson.js';
import { GetUnitsByLesson } from './reducers/GetUnitsByLesson.js';
import { GetUnitByCourse } from './reducers/GetUnitByCourse.js';
import { GetPrequisiteByCourse } from './reducers/GetPrequisiteByCourse.js';
import { GetLessonByCourseId } from './reducers/GetLessonByCourseId.js';
import { GetActivePromotionEvent } from './reducers/GetActivePromotionEvent.js';
import { GetSubscriberList } from './reducers/GetSubscriberList.js';
import { UploadCourse } from './reducers/UploadCourse.js';
import { UpdateCourseReducer } from './reducers/UpdateCourseReducer.js';
import { UploadLesson } from './reducers/UploadLesson.js';
import { UploadUnit } from './reducers/UploadUnit.js';
import FetchLessonId from './reducers/FetchLessonId.js';
import { UploadPrerquisite } from './reducers/UploadPrerquisite.js';
import { UploadImage } from './reducers/UploadImage.js';
import { UploadImageProgram } from './reducers/UploadImageProgram.js';
import { UploadImageCourse } from './reducers/UploadImageCourse.js';
import { GetImageList } from './reducers/GetImageList.js';
import { GetImageProgram } from './reducers/GetImageProgram.js';
import { GetImageCourse } from './reducers/GetImageCourse.js';
import { CreateProgramCourse } from './reducers/CreateProgramCourse.js';
import { GetImageCourseForProgramDetail } from './reducers/GetImageCourseForProgramDetail.js';
import { SendEmail } from './reducers/SendEmail.js';
import GetUserByEmail from './reducers/GetUserByEmail.js';
import { GetImageTable } from './reducers/GetImageTable.js';



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
  editProgram:UpdateProgramReducer,
  editUser:UpdateUserReducer,
  getProgramsId: FetchProgramId,
  fetchSubProgramId: FetchSubProgramId,
  getProgramsWithCourse: FetchProgramWithCourse,
  getAllStatusList: GetStatusList,
  editUserStatus: UpdateUserStatus,
  getUserByStatus:GetUserByStatus,
  getVisitorsByStatus:GetVisitorsByStatus,
  programCourseCombo:ProgramCourseCombination,
  subscriberRegister: SubscriberReducer,
  getAllSubscribersNprogram: GetSubscriberList,
  getLessons: GetLessons,
  getUnits: GetUnits,
  getUnitsByLesson:GetUnitsByLesson,
  getCourseWithLesson:GetCourseWithLesson,
  getUnitsByCourse:GetUnitByCourse,
  getPrerequisiteByCourse:GetPrequisiteByCourse,
  getLessonsByCourseId:GetLessonByCourseId,
  fetchActivePromotionEvent:GetActivePromotionEvent,
  addNewCourse: UploadCourse,
  editCourse:UpdateCourseReducer,
  addNewLesson:UploadLesson,
  addNewUnit:UploadUnit,
  getLessonsId: FetchLessonId,
  uploadNewProgramCourse: CreateProgramCourse,
  addNewPrerequisite:UploadPrerquisite,
  addNewImage: UploadImage,
  addImageProgram:UploadImageProgram,
  addImageCourse:UploadImageCourse,
  loadImageList:GetImageList,
  loadImageTable: GetImageTable,
  loadImageProgram:GetImageProgram,
  loadImageCourse:GetImageCourse,
  loadImageCourseForProgramDetail:GetImageCourseForProgramDetail,
  emailNotification:SendEmail,
  getUsersByEmail:GetUserByEmail
});

export default rootReducer;
