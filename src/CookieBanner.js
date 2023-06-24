import {CookieConsent, Cookies, getCookieConsentValue} from 'react-cookie-consent'
import { useState } from 'react';

const CookieBanner = () => {
    const[showCookieBar,setShowCookieBar] = useState(true)
  //console.log(Cookies);

  
  const handleDecline = ()=>{
    Cookies.remove('upl')
  }
  return (
    <div>
      
        <div className='container'>
          <CookieConsent enableDeclineButton flipButtons
        
        location="bottom"
        style={{backgroundColor: "#06BBCC", color:"#181d38", fontWeight: "bold"}}
        buttonStyle={{backgroundColor: "#3251A3", color: "#fff", borderRadius: "25px", padding: "10px"}}
        expires={1}
        buttonText="Ok Got it!!!"
        declineButtonStyle={{borderRadius: "25px", padding: "10px"}}
        cookieName='upl'
        onDecline={handleDecline}
        >
        We use cookies to ensure you have the best browsing experience on our website. Please read <a href='#'>Cookie Policy & Privacy Policy</a>
        </CookieConsent>
        </div>
      
    </div>
  )
}

export default CookieBanner
