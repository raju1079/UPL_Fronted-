
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import Home from "./components/Homepage/Home";
import Programs from './components/Programs/Programs';
import ProgramDetail from './components/Programs/ProgramDetail';
import RegisterForm from './components/auth/RegisterForm';
import LoginForm from './components/auth/LoginForm';
import Welcome from './components/auth/Welcome';
import CourseDetail from './components/course/CourseDetail';
import DownloadLesson from './components/course/DownloadLesson';
import AboutPage from './components/about/AboutPage';
import Courses from './components/course/Courses';
import Contact from './components/Contact';
import ShowHeader from './components/common/ShowHeader';
import CookieBanner from './CookieBanner';
import AdminDashBoard from './components/auth/admin/AdminDashBoard';
import AllPrograms from './components/auth/admin/allprograms/AllPrograms';
import ExecutorDashboard from './components/auth/salesExecutors/ExecutorDashboard';
import RouteTop from './RouteTop';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import UploadImage from './components/auth/admin/imagecontrol/UploadImage';
import ImageGallery from './components/auth/admin/imagecontrol/ImageGallery';
import { useState } from 'react';
import Dashboard from './components/auth/Dashboard';
import AdminCp from './components/auth/AdminCp';
import TopbarUser from './components/common/TopbarUser';
import ShowTopbar from './components/common/ShowTopbar';
import AllCourses from './components/auth/admin/allcourses/AllCourses';
import AddNewCourse from './components/auth/admin/addcourse/AddNewCourse';
import UpdateProgram from './components/auth/admin/addprogram/UpdateProgram';
import UpdateUser from './components/auth/UpdateUser';
import MakeCategory from './components/auth/admin/programcourse/MakeCategory';
import AllEvents from './components/auth/admin/events/AllEvents';
import AddPromotion from './components/auth/admin/addpromotion/AddPromotion';
import SubscriberEnquiry from './components/auth/subscriberenquiry/SubscriberEnquiry';
import AddNewProgram from './components/auth/admin/addprogram/AddNewProgram';
import CreateNewUser from './components/auth/admin/adduser/CreateNewUser';
import LatestEvent from './components/events/LatestEvent';

function App() {
  const[bgcolor,setBgColor] = useState('')
    
  return (
    <div className="App learningapp" style={{backgroundImage: bgcolor}}>
      <ToastContainer theme='colored' position='top-center'></ToastContainer>
        <BrowserRouter>
        <ShowHeader>
          <Navbar />
        </ShowHeader>    
        <ShowTopbar>
            <TopbarUser />
        </ShowTopbar>  
        <RouteTop>
        <div className='content-top-margin'>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path="/about" element={<AboutPage />} />     
          <Route exact path="/programs" element={<Programs />} />     
          <Route exact path="/courses" element={<Courses />} />     
           <Route exact path='/programDetail/:id' element={<ProgramDetail />} />
          <Route exact path='/courses/:id' element={<CourseDetail bgcolor={bgcolor} setBgColor={setBgColor} />} />
          <Route exact path='/register' element={<RegisterForm />} />
          <Route exact path='/login' element={<LoginForm />} />
          <Route exact path='/registerform' element={<RegisterForm />} />
          <Route exact path='/welcome' element={<Welcome />}></Route>
          <Route exact path='/download' element={<DownloadLesson />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/latestEvent/:id' element={<LatestEvent />} />
          
          <Route path='/auth' >
            <Route  path='ExecutorDashboard' element={<ExecutorDashboard />} />
            <Route  path='updateVisitor/:id' element={<UpdateUser/>} />
            {/* <Route  path='AdminDashboard' element={<AdminDashBoard />} />
            <Route  path='createNewUser' element={<CreateNewUser />} />
            <Route  path='addNewProgram' element={<AddNewProgram />} />
            <Route  path='allPrograms' element={<AllPrograms />} />
            <Route  path='updateProgram/:id' element={<UpdateProgram />} />
            <Route  path='updateUser/:id' element={<UpdateUser />} />
            <Route  path='uploadProgramImage' element={<UploadImage />} />
            <Route  path='imageGallery' element={<ImageGallery />} />
            <Route  path='addPromotion' element={<AddPromotion />} /> */}
          </Route>

          <Route path="/AdminCp" element={<AdminCp />}>
            <Route  path='AdminDashboard' element={<AdminDashBoard />} />
            {/* admin CRUD user  */}
            <Route  path='createNewUser' element={<CreateNewUser />} />
            <Route  path='updateUser/:id' element={<UpdateUser />} />
            {/* admin CRUD programs */}
            <Route  path='addNewProgram' element={<AddNewProgram />} />
            <Route  path='allPrograms' element={<AllPrograms />} />
            <Route  path='updateProgram/:id' element={<UpdateProgram />} />
            {/* admin CRUD image */}
            <Route  path='uploadProgramImage' element={<UploadImage />} />
            <Route  path='imageGallery' element={<ImageGallery />} />
            
            <Route  path='dashboard' element={<Dashboard />} />
            {/* admin CRUD course */}
            <Route  path='allCourses' element={<AllCourses />} />
            <Route  path='addNewCourse' element={<AddNewCourse />} />
            {/* admin CRUD programcourse linking */}
            <Route  path='allCategory' element={<MakeCategory />} />
            
            {/* admin CRUD promotion */}
              {/* Events */}
              <Route  path='allEvents' element={<AllEvents />} />
              <Route  path='allPromotions' element={<MakeCategory />} />
              <Route  path='addPromotion' element={<AddPromotion />} />

            {/* subscribers enquiry from promotion banner */}  
            <Route  path='subscriberEnquiry' element={<SubscriberEnquiry />} />
            
          </Route>
         
          
        </Routes>
        </div>
        </RouteTop>
      <ShowHeader>
        <Footer />
      </ShowHeader>
      </BrowserRouter>
      {/* coockie consent */}
      <CookieBanner />
    </div>
  );
}

export default App;
