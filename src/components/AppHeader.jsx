import React from "react";

function AppHeader() {
  return (
    <div className="appheader">
      <div style={{ display: "flex", flexDirection: "row" }}>
        <h3 className="navtitle">HerBusiness Media</h3>
        <h6 className="navletters" style={{ marginLeft: 70 }}>
          HOME
        </h6>
        <h6 className="navletters">ABOUT</h6>
        <h6 className="navletters">STORIES</h6>
        <h6 className="navletters">PRESS & MEDIA</h6>
        <h6 className="navletters">VIDEOS</h6>
        <h6 className="navletters">PODCAST</h6>
        <h6 className="navletters">EVENTS</h6>
        <h6 className="navletters">BUSINESS</h6>
        <h6 className="navletters">COLLABORATION</h6>
        <h6 className="navletters">CONTACT</h6>
        <button className="navlogin">
          <h6 className="navlogintext">LOGIN</h6>
        </button>
        <button className="navsignup">
          <h6 className="navsignuptext">SIGN UP</h6>
        </button>
      </div>
    </div>
  );
}

export default AppHeader;
