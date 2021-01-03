import React from "react";
import "./Location.css";

function Location() {
  return (
    <section className="location-section">
      <div className="location-head">
        <p className="location-paragraph">
          <i>Come dine in</i>
        </p>
        <h4 className="location-header">HOURS & LOCATION</h4>
      </div>

      <div>
        <p>
          <span className="location-hours"> Open 7 days a week</span> <br />
          11AM - 10PM
        </p>
        <p>
          <span className="location-hours"> Amman, Mecca Street</span> <br />
          077 7777 999
        </p>
      </div>
    </section>
  );
}

export default Location;
