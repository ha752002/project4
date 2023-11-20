import React, { useState } from "react";
// import { div } from "@mui/material";
import styles from "./DefaultLayout.module.scss";
import Header from "../AdminComponents/Header";
// import Footer from "../AdminComponents/Footer";
import Sidebar from "./Sidebar";
import clsx from "clsx";
import x from "../../../assets/home/icon/x.svg";
import list_task from "../../../assets/home/icon/list-task.svg";
import { Outlet } from "react-router-dom";

export default function AdminDefaultLayout(props) {
  // const Sidebar = false;
  const [isSidebarOpen, setSidebarOpen] = useState(true); // Đổi tên để dễ hiểu

  const handleClick = () => {
    setSidebarOpen(!isSidebarOpen);
    console.log(isSidebarOpen);
  };

  return (
    <div className={clsx(styles.container, styles.flex)}>
      <div className={clsx(styles.sidebar, (isSidebarOpen ? styles.sidebar : styles.hidden))}   >
        <Sidebar />
      </div>
      <div className={clsx(styles.container, styles.Outlet)}>
        <div >
          <div className={clsx(styles.group_header)}>
            <div className={clsx(styles.open_and_close)} onClick={handleClick}>
              {isSidebarOpen ? (<img src={x} alt="" /> ) : ( <img src={list_task} alt="" /> )}
            </div>

            <div className={clsx(styles.open_and_close , styles.block)} onClick={handleClick}>
              {isSidebarOpen ? (<img src={x} alt="" /> ) : ( <img src={list_task} alt="" /> )}
            </div>

            <Header />
          </div>
          {console.log(props)}
          <div className={clsx(styles.content)}>
            <Outlet />
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
}
