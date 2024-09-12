import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "../Footer/footer.css";
const Footer = () => {
  return (
    <div className="footer-outer-container">
      <div className="footer-inner-container">
        <div className="footer-icons">
          <FacebookOutlinedIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div> 
        <div className="footer-data">
          <div>
            <ul>
              <li>Audio DEscription</li>
              <li>Invester Relation</li>
              <li>Legal Notice</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookie Preferences</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Gift Cards</li>
              <li>Terms of use</li>
              <li>Corporate Information</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Media Cente</li>
              <li>Privacy</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className="Service-code">
            <p>Service code</p>
          </div>
          <div className="Copy-right">&copy; 1997-2024 Netflix,Inc.</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
