import React from "react";
import GitHub from "../../assets/GitHub.png";
import Instagram from "../../assets/Instagram.png";
import Linkedin from "../../assets/Linkedin.png";
import "./socialButton.css";

function SocialButton(props) {
  console.log(props.image);
  return (
    <>
      <a href="#" style={{textDecoration:"none"}}>
        <button className="socialButton GitHub" style={{backgroundColor:"rgba(0, 0, 0, 0.3)"}}>
          <img className="social_Image" src={GitHub} alt="" width={30} height={30} style={{padding:"10px"}} />
          <p className="social_Text">GitHub</p>
        </button>
      </a>
      <a href="#" style={{textDecoration:"none"}}>
        <button className="socialButton" style={{ backgroundColor: "rgba(0, 123, 182, 0.5)"}}>
          <img className="social_Image" src={Linkedin} alt="" width={30} height={30} style={{padding:"10px"}}/>
          <p className="social_Text">Linkedin</p>
        </button>
      </a>
      <a href="#"  style={{textDecoration:"none"}}>
        <button className="socialButton" style={{ backgroundColor: "rgba(228, 64, 95, 0.5)"}}>
          <img className="social_Image" src={Instagram} alt="" width={30} height={30} style={{padding:"10px"}}/>
          <p className="social_Text">Instagram</p>
          
        </button>
      </a>

    </>
  );
}

export default SocialButton;
