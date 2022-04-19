import React from 'react';
import './Footer.css'
import logo from '../../Assets/logo.png'
import paymentMethod from '../../Assets/payment-method.png';
import palyStore from '../../Assets/google-play.svg'
import IStore from '../../Assets//istore.svg'
import { Link } from 'react-router-dom';

const Footer = () => {
 return (
  <div className='footer-container pt-5 pb-2'>
   <div className="footer-one pb-2">
    <div className="footer-logo">
     <img className='main-logo' src={logo} alt="" />
     <img src={palyStore} alt="" />
     <img src={IStore} alt="" />
    </div>
    <div className="footer-links">
     <Link className="links" to=''>About Online Course</Link>
     <Link className="links" to=''>Read our blog</Link>
     <Link className="links" to=''>SingUp to Free Class</Link>
     <Link className="links" to=''>Popular Course</Link>
    </div>
    <div className="footer-links">
     <Link className="links" to=''>Get Help</Link>
     <Link className="links" to=''>Read FAQs</Link>
     <Link className="links" to=''>Purchase-guide</Link>
     <Link className="links" to=''>Contact Me</Link>
    </div>
    <div className="payment-method">
     <img src={paymentMethod} alt="" />
    </div>
   </div>
   <div className="footer-two">
    <div className="copyright">
     <p>©2020-2022 copyright | All right received</p>
    </div>
    <div className="conditions">
     <p className="links">Trams and Conditions</p>
     <p className="links">Privacy Policy</p>
     <p className="links">Refund Policy</p>
     <p className="links">Pricing</p>
    </div>
   </div>
  </div>
 );
};

export default Footer;