import React, { Component, useRef, useEffect, useState } from "react";
import clsx from "clsx";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { Doughnut } from "react-chartjs-2";

import Styles from "./Dashboard.module.scss";
// import faker from 'faker';
ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  // labels: [],
  datasets: [
    {
      label: "# of Votes",
      data: [120, 19],
      backgroundColor: ["rgba(255, 255, 255, 0.2)", "rgba(255, 255, 255, 0.2)"],
      borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
      borderWidth: [1],
    },
  ],
};

const numberOfRepeats = 4;

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      daysOfWeek: [
        "Chủ Nhật",
        "Thứ 2",
        "Thứ 3",
        "Thứ 4",
        "Thứ 5",
        "Thứ 6",
        "Thứ 7",
      ],
      currentDate: new Date(),
      day: 0,
      lastDayOfMonth: 0,
      weeks: [],
      currentYear: new Date().getFullYear(),
      currentMonth: new Date().getMonth() + 1,
      years: this.generateYears(10),
      months: Array.from({ length: 12 }, (_, i) => i + 1),
    };
  }

  componentDidMount() {
    this.calculateDaysInMonth();
  }

  generateYears(numYears) {
    const currentYear = new Date().getFullYear();
    const years = [];

    for (let i = currentYear; i < currentYear + numYears; i++) {
      years.push(i);
    }

    return years;
  }

  calculateDaysInMonth = () => {
    const firstDay = new Date(
      this.state.currentYear,
      this.state.currentMonth - 1,
      1
    );
    const lastDay = new Date(
      this.state.currentYear,
      this.state.currentMonth,
      0
    );
    const firstDayOfWeek = firstDay.getDay();
    const lastDayOfMonth = lastDay.getDate();
    let weeks = [];
    let daysInWeek = [];

    // Tính toán ngày của tháng trước
    const prevMonthLastDay = new Date(
      this.state.currentYear,
      this.state.currentMonth - 1,
      0
    );
    const prevMonthDays = prevMonthLastDay.getDate();
    for (let i = prevMonthDays - firstDayOfWeek + 1; i <= prevMonthDays; i++) {
      if (this.state.currentMonth === 1) {
        daysInWeek.push({ day: i, month: 12 });
      } else {
        daysInWeek.push({ day: i, month: this.state.currentMonth - 1 });
      }
      // daysInWeek.push({ day: i, month: this.state.currentMonth - 1 });
    }

    for (let day = firstDay.getDate(); day <= lastDay.getDate(); day++) {
      daysInWeek.push({ day, month: this.state.currentMonth });
      if (daysInWeek.length === 7) {
        weeks.push([...daysInWeek]);
        daysInWeek = [];
      }
    }

    // Tính toán ngày của tháng này
    if (daysInWeek.length > 0) {
      const nextMonthFirstDay = new Date(
        this.state.currentYear,
        this.state.currentMonth,
        1
      );
      const remainingDays = 7 - daysInWeek.length;

      for (
        let day = nextMonthFirstDay.getDate();
        day <= nextMonthFirstDay.getDate() + remainingDays - 1;
        day++
      ) {
        if (this.state.currentMonth === 12) {
          daysInWeek.push({ day, month: 1 });
        } else {
          daysInWeek.push({ day, month: this.state.currentMonth + 1 });
        }
      }
    }

    // Tính toán ngày của tháng sau
    if (daysInWeek.length > 0) {
      weeks.push([...daysInWeek]);
    }

    this.setState({ weeks });
  };

  updateCurrentMonthAndYear(offset) {
    const newMonth = this.state.currentMonth + offset;
    const newWeeks = [];

    let newCurrentMonth, newCurrentYear;

    if (newMonth === 0) {
      newCurrentMonth = 12;
      newCurrentYear = this.state.currentYear - 1;
    } else if (newMonth === 13) {
      newCurrentMonth = 1;
      newCurrentYear = this.state.currentYear + 1;
    } else {
      newCurrentMonth = newMonth;
      newCurrentYear = this.state.currentYear;
    }

    this.setState(
      {
        currentMonth: newCurrentMonth,
        currentYear: newCurrentYear,
        weeks: newWeeks,
      },
      () => {
        this.calculateDaysInMonth();
      }
    );
  }

  renderTableHead() {
    return (
      <thead>
        <tr>
          {this.state.daysOfWeek.map((dayOfWeek, index) => (
            <th key={index}>{dayOfWeek}</th>
          ))}
        </tr>
      </thead>
    );
  }

  renderTableBody() {
    return (
      <tbody>
        {this.state.weeks.map((week, i) => (
          <tr key={i}>
            {week.map((days, j) => (
              <td
                key={j}
                className={clsx(
                  this.state.currentMonth == days.month
                    ? Styles.currentMonth
                    : ""
                )}
              >
                {days.day}/{days.month}
                {/* {this.state.currentMonth} */}
                <br />
                {/* {this.renderTimeSlots(days.day, days.month)} */}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }

  renderTimeSlots(day, month) {
    return this.state.practiceTimes.map((time) => {
      if (
        this.formatDay(day) === new Date(time.timeStart).getDate().toString() &&
        month.toString() ===
          (new Date(time.timeStart).getMonth() + 1).toString() &&
        this.state.currentYear.toString() ===
          new Date(time.timeStart).getFullYear().toString()
      ) {
        return (
          <div key={time.id}>
            {time.content}
            {time.id}
          </div>
        );
      } else {
        return null;
      }
    });
  }

  render() {
    const logDays = () => {};
    return (
      <React.Fragment>
        <div className={clsx(Styles.Dashboard, Styles.text)}>
          <div className={clsx(Styles.group_hello)}>
            <div className={clsx(Styles.hello_text)}>Hello Devs !</div>
            <div className={clsx(Styles.title)}>
              We are on a mission to help developers like you to build beautiful
              projects for free.
            </div>
          </div>
          <div className={clsx(Styles.group_Dashboard)}>
            <div className={clsx(Styles.group_chart)}>
              {Array.from({ length: numberOfRepeats }).map((_, index) => (
                <div key={index} className={clsx(Styles.statistical_chart)}>
                  <div className={clsx(Styles.pie_chart)}>
                    <Doughnut data={data} />
                  </div>
                  <div className={clsx(Styles.title_chart)}>
                    <div>Total Sales</div>
                    <div className={clsx(Styles.text_b)}>$560K</div>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <div>
                <div>
                  <ul className={clsx(Styles.select_month)}>
                    <li onClick={() => this.updateCurrentMonthAndYear(-1)}>
                      <img src="../../../assets/svg/arrow-left.svg" alt="" />
                    </li>
                    <li className={clsx(Styles.month)}>
                      {this.state.currentMonth}/{this.state.currentYear}
                    </li>
                    <li
                      className={clsx(Styles.month)}
                      onClick={() => this.updateCurrentMonthAndYear(1)}
                    >
                      <img src="../../../assets/svg/arrow-right.svg" alt="" />
                    </li>
                  </ul>
                </div>

                <table>
                  {this.renderTableHead()}
                  {this.renderTableBody()}
                </table>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
