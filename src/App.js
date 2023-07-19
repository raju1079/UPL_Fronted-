
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
import AddNewProgram from './components/auth/addprogram/AddNewProgram';
import CreateNewUser from './components/auth/adduser/CreateNewUser';
import AdminDashBoard from './components/auth/admin/AdminDashBoard';
import AllPrograms from './components/auth/admin/allprograms/AllPrograms';
import UpdateProgram from './components/auth/addprogram/UpdateProgram';
import ExecutorDashboard from './components/auth/salesExecutors/ExecutorDashboard';
import UpdateVisitor from './components/auth/visitors/UpdateVisitor';
import UpdateUser from './components/auth/admin/UpdateUser';
import RouteTop from './RouteTop';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import UploadImage from './components/auth/admin/imagecontrol/UploadImage';
import ImageGallery from './components/auth/admin/imagecontrol/ImageGallery';
import AddPromotion from './components/auth/admin/promotion/AddPromotion';

function App() {
  
  return (
    <div className="App learningapp">
      <ToastContainer theme='colored' position='top-center'></ToastContainer>
        <BrowserRouter>
        <ShowHeader>
          <Navbar />
        </ShowHeader>      
        <RouteTop>
        <div className='content-top-margin'>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path="/about" element={<AboutPage />} />     
          <Route exact path="/programs" element={<Programs />} />     
          <Route exact path="/courses" element={<Courses />} />     
           <Route exact path='/programDetail/:id' element={<ProgramDetail />} />
          <Route exact path='//courses/:id' element={<CourseDetail />} />
          <Route exact path='/register' element={<RegisterForm />} />
          <Route exact path='/login' element={<LoginForm />} />
          <Route exact path='/registerform' element={<RegisterForm />} />
          <Route exact path='/welcome' element={<Welcome />}></Route>
          <Route exact path='/download' element={<DownloadLesson />} />
          <Route exact path='/contact' element={<Contact />} />
          
          <Route path='/auth' >
            <Route  path='ExecutorDashboard' element={<ExecutorDashboard />} />
            <Route  path='AdminDashboard' element={<AdminDashBoard />} />
            <Route  path='createNewUser' element={<CreateNewUser />} />
            <Route  path='addNewProgram' element={<AddNewProgram />} />
            <Route  path='allPrograms' element={<AllPrograms />} />
            <Route  path='updateProgram/:id' element={<UpdateProgram />} />
            <Route  path='updateUser/:id' element={<UpdateUser />} />
            <Route  path='uploadProgramImage' element={<UploadImage />} />
            <Route  path='imageGallery' element={<ImageGallery />} />
            <Route  path='addPromotion' element={<AddPromotion />} />
          </Route>
         
          
        </Routes>
        </div>
        </RouteTop>
      <Footer />
      </BrowserRouter>
      {/* coockie consent */}
      <CookieBanner />
    </div>
  );
}

export default App;
