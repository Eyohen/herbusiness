import React from "react";

function AppFooter() {
  return (
    <div className="appfooter">
      <div style={{ display: "flex", flexDirection: "row" }}>
        <h6
          style={{
            marginLeft: 0,
            fontSize: 22,
            fontWeight: "600",
            fontFamily: "Book Antiqua",
          }}
        >
          HerBusiness Media
        </h6>
        <div>
          <h6 className="quicklinks">Quick Links</h6>
          <h6 className="smalltext">Home</h6>
          <h6 className="smalltext">About</h6>
          <h6 className="smalltext">Stories</h6>
          <h6 className="smalltext">Press & Media</h6>
          <h6 className="smalltext">Videos</h6>
        </div>
        <div>
          <h6 className="podcast">Podcast</h6>
          <h6 className="events">Events</h6>
          <h6 className="events">Business</h6>
          <h6 className="events">Collaboration</h6>
          <h6 className="events">Contact</h6>
        </div>
        <div>
          <h6 className="quicklinks">Contact Info</h6>
          <h6 className="smalltext">story@herbusinessmedia.com</h6>
        </div>
        <div>
          <h6 className="quicklinks">Join our Community</h6>
          <h6 className="smalltext">
            Join our community and get access to resources
            <br /> and have the chance to be featured as a business.
          </h6>
        </div>
      </div>
    </div>
  );
}

export default AppFooter;
