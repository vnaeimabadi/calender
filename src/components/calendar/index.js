import React from "react";
import moment from "moment";
import "./calendar.css";

const Calendar = ({ date }) => {
  const dateObject = moment(date.split("/").reverse().join("/"));
  const year = dateObject.format("Y");
  const month = dateObject.format("MMMM");
  const today = +dateObject.format("D");
  const weekdayshort = moment.weekdaysShort();

  const daysInMonthFn = () => {
    return dateObject.daysInMonth();
  };

  const firstDayOfMonth = () => {
    let firstDay = moment(dateObject).startOf("month").format("d");
    return firstDay;
  };

  const weekdayshortname = weekdayshort.map((day) => {
    return <th key={day}>{day}</th>;
  });

  let blanks = [];
  for (let i = 0; i < firstDayOfMonth(); i++) {
    blanks.push(
      <td className="calendar-day empty" key={i}>
        {""}
      </td>
    );
  }

  let daysInMonth = [];
  for (let d = 1; d <= daysInMonthFn(); d++) {
    let currentDay = d === today && "today";
    daysInMonth.push(
      <td key={d} className={`calendar-day ${currentDay}`}>
        <span>{d}</span>
      </td>
    );
  }
  var totalSlots = [...blanks, ...daysInMonth];
  let rows = [];
  let cells = [];

  totalSlots.forEach((row, i) => {
    if (i % 7 !== 0) {
      cells.push(row);
    } else {
      rows.push(cells);
      cells = [];
      cells.push(row);
    }
    if (i === totalSlots.length - 1) {
      rows.push(cells);
    }
  });

  let daysinmonth = rows.map((d, i) => {
    return <tr key={i}>{d}</tr>;
  });

  return (
    <div className="special-date-calendar">
      <div className="calendar-navi">
        <span class="calendar-label">{month}</span>
        <span className="calendar-label">{year}</span>
      </div>

      <div className="calendar-date">
        <table className="calendar-day">
          <thead>
            <tr>{weekdayshortname}</tr>
          </thead>
          <tbody>{daysinmonth}</tbody>
        </table>
      </div>
    </div>
  );
};

export default React.memo(Calendar);
