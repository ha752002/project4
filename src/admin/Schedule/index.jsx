import React, { useState, useEffect } from "react";
import clsx from "clsx";
import Styles from "./Schedule.module.scss";

export default function Schedule() {
  const [state, setState] = useState({
    daysOfWeek: ['Chủ Nhật', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'],
    currentDate: new Date(),
    day: 0,
    lastDayOfMonth: 0,
    weeks: [],
    currentYear: new Date().getFullYear(),
    currentMonth: new Date().getMonth() + 1,
    years: Array.from({ length: 10 }, (_, i) => new Date().getFullYear() + i),
    months: Array.from({ length: 12 }, (_, i) => i + 1),
  });

  useEffect(() => {
    // Gọi hàm calculateDaysInMonth khi component đã được tải
    calculateDaysInMonth(state);
  }, [state.currentYear, state.currentMonth]);

  const calculateDaysInMonth = (state) => {
    const firstDay = new Date(state.currentYear, state.currentMonth - 1, 1);
    const lastDay = new Date(state.currentYear, state.currentMonth, 0);
    const firstDayOfWeek = firstDay.getDay();
    const lastDayOfMonth = lastDay.getDate();
    let weeks = [];
    let daysInWeek = [];

    // Tính toán ngày của tháng trước
    const prevMonthLastDay = new Date(state.currentYear, state.currentMonth - 1, 0);
    const prevMonthDays = prevMonthLastDay.getDate();
    for (let i = prevMonthDays - firstDayOfWeek + 1; i <= prevMonthDays; i++) {
      if(state.currentMonth === 1){
        daysInWeek.push({ day:i, month: 12 });
      }else{
        daysInWeek.push({day: i, month: state.currentMonth - 1 });

      }
      // daysInWeek.push({ day: i, month: this.state.currentMonth - 1 });
    }

    for (let day = firstDay.getDate(); day <= lastDay.getDate(); day++) {
      daysInWeek.push({ day, month: state.currentMonth });
      if (daysInWeek.length === 7) {
        weeks.push([...daysInWeek]);
        daysInWeek = [];
      }
    }

    // Tính toán ngày của tháng này
    if (daysInWeek.length > 0) {
      const nextMonthFirstDay = new Date(state.currentYear, state.currentMonth, 1);
      const remainingDays = 7 - daysInWeek.length;

      for (let day = nextMonthFirstDay.getDate(); day <= nextMonthFirstDay.getDate() + remainingDays - 1; day++) {
        if(state.currentMonth === 12){
          daysInWeek.push({ day, month: 1 });
        }else{
          daysInWeek.push({ day, month: state.currentMonth + 1 });
        }
      }
    }

    // Tính toán ngày của tháng sau
    if (daysInWeek.length > 0) {
      weeks.push([...daysInWeek]);
    }

    setState(prevState => ({
      ...prevState,weeks
      // Các trường thông tin bạn muốn cập nhật
    }));
  };

  const updateCurrentMonthAndYear = (offset) => {
    const newMonth = state.currentMonth + offset;
    let newCurrentMonth, newCurrentYear;

    if (newMonth === 0) {
      newCurrentMonth = 12;
      newCurrentYear = state.currentYear - 1;
    } else if (newMonth === 13) {
      newCurrentMonth = 1;
      newCurrentYear = state.currentYear + 1;
    } else {
      newCurrentMonth = newMonth;
      newCurrentYear = state.currentYear;
    }

    // Sử dụng setState để cập nhật state
    setState(prevState => ({
      ...prevState,
      currentMonth: newCurrentMonth,
      currentYear: newCurrentYear,
      weeks: [],
    }));
  };


  const renderTableHead = () => {
    return (
      <thead>
        <tr className={clsx(Styles.week)}>
          {state.daysOfWeek.map((dayOfWeek, index) => (
            <th key={index}>{dayOfWeek}</th>
          ))}
        </tr>
      </thead>
    );
  };

  const renderTableBody = () => {
    return (
      <tbody>
        {state.weeks.map((week, i) => (
          <tr key={i} className={clsx(Styles.week)}>
            {week.map((days, j) => (
              <td key={j} className={clsx(state.currentMonth === days.month ? Styles.currentMonth : "")}>
                {days.day}/{days.month}
                {console.log(days.month)}
                <br />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  };

  // renderTimeSlots(day, month) {
  //   return this.state.practiceTimes.map((time) => {
  //     if (
  //       this.formatDay(day) === new Date(time.timeStart).getDate().toString() &&
  //       month.toString() === (new Date(time.timeStart).getMonth() + 1).toString() &&
  //       this.state.currentYear.toString() === new Date(time.timeStart).getFullYear().toString()
  //     ) {
  //       return (
  //         <div key={time.id}>
  //           {time.content}
  //           {time.id}
  //         </div>
  //       );
  //     } else {
  //       return null;
  //     }
  //   });
  // }


  return (
    <div className={clsx(Styles.Schedule, Styles.text)}>
      <button onClick={() => updateCurrentMonthAndYear(-1)}>Previous Month</button>
      <button onClick={() => updateCurrentMonthAndYear(1)}>Next Month</button>
      <table className={clsx(Styles.tableStatistical_tables)}>
        {renderTableHead()}
        {renderTableBody()}
      </table>
    </div>
  );
}
