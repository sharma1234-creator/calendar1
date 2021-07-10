import React from "react";
import EventCalendar from "./component/EventCalendar";
const Hero = ({ handleLogout }) => {
  return (
    <section className="hero">
      <nav>
        <h2>Welcome</h2>
        <button onClick={handleLogout}>Logout</button>
        <EventCalendar />
      </nav>
    </section>
  );
};

export default Hero;
