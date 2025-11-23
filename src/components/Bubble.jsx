import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import "./Bubble.css"; // create this file or merge styles into your app.css

export default function FindBubble() {
  // बदलायचा असेल तर खालील Google Maps URL बदल
  const mapsUrl = "https://maps.app.goo.gl/39GTBYFs5L1fyFk28";

  return (
    <a
      className="find-bubble"
      href={mapsUrl}
      target="_blank"
      rel="noreferrer"
      title="Find Us on Google Maps"
      aria-label="Find Us on Google Maps"
    >
      <div className="fb-inner">
        <span className="fb-icon"><FaMapMarkerAlt /></span>
        <span className="fb-text">Find Us</span>
      </div>
    </a>
  );
}