//Importing useState and useEffect Hooks
import React, { useState, useEffect } from "react";

//Importing Styles from styled-components
import styled from "styled-components";

//Importing Css
import "./Calendar.css";

//Importing dates Generator For Genetating Dates
const { datesGenerator } = require("dates-generator");

// Taking Months and Weeks in an Array
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

//Applyting Styles to the Container Tag
const Container = styled.div`
  width: 300px;
  border: 1px solid black;
  margin: 0 auto;
  box-shadow: 10px 10px 0px black;
`;

//Applyting Styles MonthText to the  Tag
const MonthText = styled.div`
  font-size: 26px;
  font-weight: bold;
  text-align: center;
`;

const Calendar = () => {
  //Using the useState Hook
  //One For selected specific date
  //One For Dates
  //Another One For a Calendar Month and Year

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [dates, setDates] = useState([]);
  const [calendar, setCalendar] = useState({
    month: selectedDate.getMonth(),
    year: selectedDate.getFullYear(),
  });

  //This useEffect Hook Setting up two Hooks value which are dates and calendar
  useEffect(() => {
    const body = {
      month: calendar.month,
      year: calendar.year,
    };
    const {
      dates,
      nextMonth,
      nextYear,
      previousMonth,
      previousYear,
    } = datesGenerator(body);

    setDates([...dates]);
    setCalendar({
      ...calendar,
      nextMonth,
      nextYear,
      previousMonth,
      previousYear,
    });
  }, []);

  //The calendar Hook has an object consist of
  //month
  // nextMonth:
  // nextYear:
  // previousMonth:
  // previousYear:
  // year:

  // The calendar Hook has an Array
  //0: (7) [{…}, {…}, {…}, {…}, {…}, {…}, {…}]
  // 1: (7) [{…}, {…}, {…}, {…}, {…}, {…}, {…}]
  // 2: (7) [{…}, {…}, {…}, {…}, {…}, {…}, {…}]
  // 3: (7) [{…}, {…}, {…}, {…}, {…}, {…}, {…}]
  // 4: (7) [{…}, {…}, {…}, {…}, {…}, {…}, {…}]
  // 5: (7) [{…}, {…}, {…}, {…}, {…}, {…}, {…}]

  // 0: {date: 27, month: 11, year: 2020}
  // 1: {date: 28, month: 11, year: 2020}
  // 2: {date: 29, month: 11, year: 2020}
  // 3: {date: 30, month: 11, year: 2020}
  // 4: {date: 31, month: 11, year: 2020}
  // 5: {date: 1, month: 0, year: 2021}
  // 6: {date: 2, month: 0, year: 2021}

  //Inorder to get the next month details the dates and calendar Hooks are set Again inside this Function

  const onClickNext = () => {
    const body = { month: calendar.nextMonth, year: calendar.nextYear };
    const {
      dates,
      nextMonth,
      nextYear,
      previousMonth,
      previousYear,
    } = datesGenerator(body);

    setDates([...dates]);
    setCalendar({
      ...calendar,
      month: calendar.nextMonth,
      year: calendar.nextYear,
      nextMonth,
      nextYear,
      previousMonth,
      previousYear,
    });
  };

  //Inorder to get the Previous month details the dates and calendar Hooks are set Again inside this Function

  const onClickPrevious = () => {
    const body = { month: calendar.previousMonth, year: calendar.previousYear };
    const {
      dates,
      nextMonth,
      nextYear,
      previousMonth,
      previousYear,
    } = datesGenerator(body);

    setDates([...dates]);
    setCalendar({
      ...calendar,
      month: calendar.previousMonth,
      year: calendar.previousYear,
      nextMonth,
      nextYear,
      previousMonth,
      previousYear,
    });
  };

  //This function is used to set the Specific Selected date in the SelectedDate hook

  const onSelectDate = (date) => {
    setSelectedDate(new Date(date.year, date.month, date.date));
  };

  return (
    <div style={{ width: "100%", paddingTop: 50 }}>
      <Container>
        <div style={{ padding: 10 }}>
          <div
            onClick={onClickPrevious}
            style={{
              float: "left",
              width: "50%",
              textAlign: "left",
              cursor: "pointer",
            }}
          >
            Previous
          </div>
          <div
            onClick={onClickNext}
            style={{
              float: "left",
              width: "50%",
              textAlign: "right",
              cursor: "pointer",
            }}
          >
            Next
          </div>
        </div>
        <MonthText>
          {months[calendar.month]}
          <br /> {calendar.year}
        </MonthText>
        <div>
          <div>
            <table style={{ width: "100%" }}>
              <tbody>
                <tr>
                  {days.map((day) => (
                    <td key={day} style={{ padding: "5px 0" }}>
                      <div style={{ textAlign: "center", padding: "5px 0" }}>
                        {day}
                      </div>
                    </td>
                  ))}
                </tr>

                {dates.length > 0 &&
                  dates.map((week) => (
                    <tr key={JSON.stringify(week[0])}>
                      {week.map((each) => (
                        <td
                          className="app__style"
                          key={JSON.stringify(each)}
                          style={{ padding: "5px 0" }}
                        >
                          <div
                            onClick={() => onSelectDate(each)}
                            style={{
                              textAlign: "center",
                              padding: "5px 0",
                            }}
                          >
                            {each.date}
                          </div>
                        </td>
                      ))}
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
        <div style={{ padding: 10 }}>
          Selected Date: {selectedDate.toLocaleString()}
        </div>
      </Container>
    </div>
  );
};

export default Calendar;
