import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import LOGO_URL from "../assets/footer-logo.png";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <div className="container">
        <div className="row">
          {/* Company Info */}
          <div className="col-md-4 mb-3">
            <img src={LOGO_URL} alt="Logo" height={100} />
            <p className="text-light mt-3">
              Providing quality services and solutions <br /> for our employee.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-3">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link
                  to="/dashboard"
                  className="text-decoration-none text-light"
                >
                  Projects
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="text-decoration-none text-light">
                  About
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/contacts"
                  className="text-decoration-none text-light"
                >
                  Contact
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/dashboard-overview"
                  className="text-decoration-none text-light"
                >
                  Terms & Condition{" "}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-3">
            <h5 className="mb-3">Contact Us</h5>
            <ul className="list-unstyled text-light">
              <li className="mb-2">
                <FaLocationDot size={20} />
                <a
                  href="https://www.google.com/maps/place/DPR+Chhattisgarh/@21.237602,81.639469,8z/data=!4m6!3m5!1s0x3a28dd4a3eb988f3:0xd74a730b4bd71ea1!8m2!3d21.2376018!4d81.6394688!16s%2Fg%2F11fq8s1vfl?hl=en&entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    fontWeight: "bold",
                  }}
                    className="contact-link"
                >
                  {" "}
                  National-Informatics-Centre, Directorate of Public Relations
                  Chhattisgarh
                </a>

                <br />
              </li>

              <li className="mb-2">
                <FaEnvelope />{" "}
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=dpr-chhattisgarh@cg.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    fontWeight: "bold",
                  }}  className="contact-link"
                >
                  dpr-chhattisgarh[at]cg[dot]gov[dot]in
                </a>
              </li>

              <li className="mb-2 ">
                <FaPhone />{" "}
                <a
                  href="tel:+919993426936"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    fontWeight: "bold",
                  }}  className="contact-link"
                >
                  +91 9993426936
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="row mt-3">
          <div className="col-12">
            <hr className="bg-light" />
            <p className="text-center text-light mb-0">
              © {new Date().getFullYear()}{" "}
              <span className="text-primary">
                hosted by National Informatic Center, Directorate of Public
                Relations Chhattisgarh
              </span>{" "}
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
