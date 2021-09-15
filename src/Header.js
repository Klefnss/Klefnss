import React, { useEffect, useState } from "react";
import "./Header.css"
import Button from '@material-ui/core/Button';
const Header = ({ data,x}) => {
  const videoSource = "../Videos/NSSEVENT.mp4";

  return (
    <div>
      {x=='1'?(
        <header id="home">
      <video oncontextmenu="return false;" autoPlay="autoplay" loop="loop" muted className="Video" >
      <source src={videoSource} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>
        <h1 style={{color:"white",textAlign:"center",paddingTop:"10px" }} >KLEF NSS</h1>
        
        <ul id="nav" className="nav" >
          <li className="current">
            <a className="smoothscroll" href="#home">
            Home
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="" href="/gallery">
              Gallery
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#contact">
              Contact
            </a>
          </li>
          <li>
            <Button
         variant="contained" 
         size="large"
         style={{backgroundColor:"#c21e56",borderRadius:100}}
         onClick={()=>{window.location.href=`${data.registrationform}`}}
         ><b>Register Now</b></Button>
          </li>
        </ul>
      </nav>
      </header>
      ):(
        <header2 id="home">
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>
        <h1 style={{color:"white",textAlign:"center",paddingTop:"10px" }}><a href="/#home" style={{color:"white",textAlign:"center",paddingTop:"10px" }}>KLEF NSS</a></h1>
        
        <ul id="nav" className="nav" >
          <li className="current">
            <a href="/#home">
            Home
            </a>
          </li>
          <li>
            <a className="" href="/#about">
              About
            </a>
          </li>
          <li>
            <a className="" href="/gallery">
              Gallery
            </a>
          </li>
          <li>
            <a className="" href="/#contact">
              Contact
            </a>
          </li>
          <li>
            <Button
         variant="contained" 
         size="large"
         style={{backgroundColor:"#c21e56",borderRadius:100}}
         onClick={()=>{window.location.href=`${data.registrationform}`}}
         ><b>Register Now</b></Button>
          </li>
        </ul>
      </nav>
      </header2>)}
      </div>
  );
};

export default Header;
