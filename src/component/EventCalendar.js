import React, { Component } from "react";
// import "../App.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
class EventCalendar extends Component {
  render() {
    return (
      <FullCalendar
        defaultView="dayGridMonth"
        plugins={[dayGridPlugin]}
        events={[
          { title: "event 1", date: "2021-07-10" },
          { title: "event 2", date: "2021-07-12" }
        ]}
      />
    );
  }
}

export default EventCalendar;
