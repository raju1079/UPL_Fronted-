
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
import ExecutorDashboard from './components/salesExecutors/ExecutorDashboard';
import {CookieConsent} from 'react-cookie-consent'
import { useState } from 'react';
import { Close, CloseRounded } from '@mui/icons-material';

function App() {
  //const authData = useSelector((state) => state.auth);
  const[showCookieBar,setShowCookieBar] = useState(true)
  
//console.log("auth", authData)
  return (
    <div className="App learningapp">
        <BrowserRouter>
        <ShowHeader>
          <Navbar />
        </ShowHeader>      
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
          <Route exact path='/ExecutorDashboard' element={<ExecutorDashboard />} />
        </Routes>
      <Footer />
      </BrowserRouter>
      {
        showCookieBar && <div className='container'>
          <CookieConsent
        debug={true}
        location="bottom"
        style={{backgroundColor: "#06BBCC", color:"#181d38", fontWeight: "bold"}}
        buttonStyle={{backgroundColor: "#3251A3", color: "#fff", borderRadius: "25px", padding: "10px"}}
        expires={1}
        buttonText="Ok Got it!!!"
        >
        We use cookies to ensure you have the best browsing experience on our website. Please read <a href='#'>Cookie Policy & Privacy Policy</a>
        
        <CloseRounded
        style={{
          backgroundColor: "white",
          marginLeft: "10px",
          cursor: "pointer"
        }}
          
          onClick={() => {
            setShowCookieBar(false)
          }}
        />
        </CookieConsent>
        </div>
      }
    </div>
  );
}

export default App;
