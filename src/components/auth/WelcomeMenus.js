import { Link } from 'react-router-dom';

const WelcomeMenus = () => {
  return (
    <>
    <div className="container-xxl py-5">
                <div className="container">
                  <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                      <h6 className="section-title bg-white text-center text-primary px-3">Welcome to UPL</h6>
                      <h1 className="mb-5">Please click any of the links below</h1>
                  </div>
                  <div className='row'>
                  <Link to={"/"}><h1>Home</h1> </Link>
                  <Link to={"/registerform"}><h1>Register</h1> </Link>
                
                <Link to={"/login"}><h1>Login</h1></Link>
                  </div>
                  </div>
            </div>
      
    </>
  )
}

export default WelcomeMenus
