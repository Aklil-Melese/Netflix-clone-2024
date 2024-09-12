import React from 'react'
import "./header.css";
import NetflixLogo from "../../assets/images/Logo/NetflixLogo2.jpg";
import searchicon from "../../assets/images/Logo/searchicon.png";
import NotificationIcon from "../../assets/images/Logo/Notificationicon.png";
import AccountIcon from "../../assets/images/Logo/accountbox.png";
import DownArrow from "../../assets/images/Logo/ArrowDropDown.png";
const Header = () => {
  return (
    <div className="header-outer-container">
      <div className="Header-container">
        <div className="header-left">
          <ul>
            <li className="NetflixLogo">
              <img src={NetflixLogo} alt="" />
            </li>
            <li>Home</li>
            <li>Tvshows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>MyList</li>
            <li>Brows by my languages</li>
          </ul> 
        </div>
        <div className="header-right">
          <ul>
            <li className="ThreeLogos">
              <img src={searchicon} alt="" />
            </li>
            <li className="NotificationIcon ThreeLogos">
              <img src={NotificationIcon} alt="" />
            </li>
            <li className="ThreeLogos">
              <img src={AccountIcon} alt="" />
            </li>
            <li className=" DownArrow">
              <img src={DownArrow} alt="" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
