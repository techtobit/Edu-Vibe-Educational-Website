import React from 'react';
import './Footer.css'
import logo from '../../Assets/logo.png'
import paymentMethod from '../../Assets/payment-method.png';
import palyStore from '../../Assets/google-play.svg'
import IStore from '../../Assets//istore.svg'
import { Link } from 'react-router-dom';

const Footer = () => {
 return (
  <div className='footer-container'>
   <div className="footer-one">
    <div className="footer-logo">
     <img className='main-logo' src={logo} alt="" />
     <img src={palyStore} alt="" />
     <img src={IStore} alt="" />
    </div>
    <div className="footer-links">
     <Link className="links" to=''>About Online food</Link>
     <Link className="links" to=''>Read our blog</Link>
     <Link className="links" to=''>SingUp to deliver</Link>
     <Link className="links" to=''>Add your restaurant</Link>
    </div>
    <div className="footer-links">
     <Link className="links" to=''>Get Help</Link>
     <Link className="links" to=''>Read FAQs</Link>
     <Link className="links" to=''>View all cities</Link>
     <Link className="links" to=''>Restaurant near me</Link>
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