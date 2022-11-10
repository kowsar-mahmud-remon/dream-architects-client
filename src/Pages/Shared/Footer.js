import React from 'react';
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div>
          <img className='w-1/3' src={logo} alt="" />
          <p className='pt-1'>Dream Architects<br />Providing Architect's Service since 2012</p>
        </div>
        <div>
          <span className="footer-title text-indigo-500 text-base">Services</span>
          <a href="/" className="link link-hover">Architect Design</a>
          <a href="/" className="link link-hover">Building Construction Design</a>
          <a href="/" className="link link-hover">Home Design</a>
          <a href="/" className="link link-hover">Office Room Design</a>
        </div>
        <div>
          <span className="footer-title text-indigo-500 text-base">About</span>
          <a href="/" className="link link-hover">About me</a>
          <a href="/" className="link link-hover">Contact</a>
          <a href="/" className="link link-hover">Jobs</a>
          <a href="/" className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title text-indigo-500 text-base">Legal</span>
          <a href="/" className="link link-hover">Terms of use</a>
          <a href="/" className="link link-hover">Privacy policy</a>
          <a href="/" className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;