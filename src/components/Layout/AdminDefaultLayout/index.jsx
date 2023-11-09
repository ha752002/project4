import React from "react";
import { Grid } from "@mui/material";
import styles from "./DefaultLayout.module.scss";
import Header from "../AdminComponents/Header";
// import Footer from "../AdminComponents/Footer";
import Sidebar from "./Sidebar";
import clsx from "clsx";
import { Outlet } from "react-router-dom";

export default function AdminDefaultLayout(props) {
  return (
    <Grid container className={clsx(styles.container)}>
      <Grid item md={1.5}>
        <Sidebar />
      </Grid>
      <Grid item md={10.5} className={clsx(styles.container)}>
        <Header />
        {console.log(props)}
        <div className={clsx(styles.content)}>
          <Outlet />
        </div>
        {/* <Footer /> */}
      </Grid>
    </Grid>
  );
}
