import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./FooterStyle.css";

const Footer = () => {
  return (
    <div>
      <div className="card text-center">
        <div className="card-body bg-dark text-light">
          <h5 className="card-title">Safe Transport</h5>
          <div className="icons">
            <TwitterIcon className="icon" />
            <FacebookIcon className="icon" />
            <InstagramIcon className="icon" />
            <LinkedInIcon className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
