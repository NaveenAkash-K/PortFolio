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
        <button className="socialButton" style={{backgroundColor:"rgba(0, 0, 0, 0.3)", width:"7rem"}}>
          <img src={GitHub} alt="" width={30} height={30} style={{padding:"10px"}} />
          <p style={{alignContent:"center"}}>GitHub</p>
        </button>
      </a>
      <a href="#" style={{textDecoration:"none"}}>
        <button className="socialButton" style={{ backgroundColor: "rgba(0, 123, 182, 0.5)", width:"7.5rem"}}>
          <img src={Linkedin} alt="" width={30} height={30} style={{padding:"10px"}}/>
          <p style={{textAlign:"center"}}>Linkedin</p>
        </button>
      </a>
      <a href="#"  style={{textDecoration:"none"}}>
        <button className="socialButton" style={{ backgroundColor: "rgba(228, 64, 95, 0.5)", width:"8rem"}}>
          <img src={Instagram} alt="" width={30} height={30} style={{padding:"10px"}}/>
          <p>Instagram</p>
          
        </button>
      </a>

    </>
  );
}

export default SocialButton;
