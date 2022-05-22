import React, { memo } from 'react'
import { useState } from "react";
import "./banner.scss"
import "./navbar.scss"
import logo from "../../images/logo.svg" 
import menuIcon from "../../images/burger.svg" 
import nextId from "react-id-generator";



function Navbar() {
    const [menuActive, setMenuActive] = useState(false);
  
    const showMenu = () => {
      setMenuActive(!menuActive);
    };
  
    const menuItems = [
      {
        id: nextId(),
        menu: "home",
        link: "/",
      },
      {
        id: nextId(),
        menu: "resources",
        link: "resources",
      },
      {
        id: nextId(),
        menu: "team",
        link: "team",
      },
      {
        id: nextId(),
        menu: "features",
        link: "features",
      },
      {
        id: nextId(),
        menu: "community",
        link: "community",
      }
      ,
      {
        id: nextId(),
        menu: "downloads",
        link: "downloads",
      }
      ,
      {
        id: nextId(),
        menu: "contuct us",
        link: "contuct us",
      }
    ];

    return (
      <nav className="navbar">
        <div className="container navbar__container">
          <div to="/" className="navbar__logo">
           <img src={logo} alt="" />
          </div>
          <button onClick={showMenu} className="navbar__toggle">
            <img src={menuIcon} alt="burger" />
          </button>
  
          <div
            className={
              menuActive ? "navbar__menu navbar__menu--show" : "navbar__menu"
            }
          >
            {menuItems.map((menuItem) => {
              return (
                <a href={menuItem.link}
                  onClick={showMenu}
                 
                  className={
                    menuActive?
                    " link-active navbar__menu-link":"navbar__menu-link"}
                  key={menuItem.id}
                >
                  {menuItem.menu}
                </a>
              );
            })}
            <div className={
             menuActive?
             " social-network-active navbar-social-network":"navbar-social-network"
          }>
                <a href="#" className="twitter"></a>
                <a href="#" className="facebook"></a>
                <a href="#" className="youtube"></a>
                <a href="#" className="skype"></a>
                <a href="#" className="pinterest"></a>
            </div>
          </div>
          
        </div>
        <div className="banner">
    <div className="container banner__container">
        <h1 className="banner-title">Secure and Anonymous Cryptocurrency </h1>
        <p className="banner-content">
        Lymcoin is a decentralized, hybrid blockhain
that is fully open-source. 
        </p>
        <a href="#" className="banner-button">contuct us</a>
        <a href="#" className="banner-button">contuct us</a>
    </div>
    </div>
      </nav>
      
    );
  }
  
  export default Navbar;