import React from "react";
import "../../styles/footer.css";
import logo from "../../assets/img/dumble.png";

const Footer = () => {
    const year=new Date().getFullYear()
  return (
    <footer className="footer" data-aos='fade-up'
    data-aos-duration='1500'>
      <div className="container">
        <div className="footer_wrapper">
          <div className="footer_box">
            <div className="logo">
              <div className="logo_img">
                <img src={logo} alt="logo"></img>
              </div>
              <h2>GRGYM</h2>
            </div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Saepe, deleniti, beatae optio autem modi 
                </p>
          </div>

          <div className="footer_box">
            <h4 className="footer_title">Company</h4>
            <ul className="footer_links">
                <li><a href="#">Our Program</a></li>
                <li><a href="#">Our Plan</a></li>
                <li><a href="#">Become Member</a></li>
            </ul>
          </div>

          <div className="footer_box">
            <h4 className="footer_title">Quicks Link</h4>
            <ul className="footer_links">
                <li><a href="#">About us</a></li>
                <li><a href="#">Oontact us</a></li>
                <li><a href="#">Support</a></li>
            </ul>
          </div>

          <div className="footer_box">
            <h4 className="footer_title">Quicks Link</h4>
            <ul className="footer_links">
                <li><a href="#">About us</a></li>
                <li><a href="#">Oontact us</a></li>
                <li><a href="#">Support</a></li>
            </ul>
          </div>
        </div>
        <p className="copyright">Copyright -{year} developed by GRG. All rights are reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
