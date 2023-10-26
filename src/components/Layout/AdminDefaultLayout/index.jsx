import ReactDOM from "react-dom";
import { Grid } from "@mui/material";
import styles from "./DefaultLayout.module.scss";
import Header from "../AdminComponents/Header";
import Footer from "../AdminComponents/Footer";
import Sidebar from "./Sidebar";
import clsx from "clsx";

import React, { Component } from "react";

export default class AdminDefaultLayout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid container className={clsx(styles.container)}>
        <Grid item md={2}>
          <Sidebar />
        </Grid>
        <Grid item md={10}>
          <Header />
          <div className={clsx(styles.content)}>{this.props.children}</div>
          <Footer />
        </Grid>
      </Grid>
    );
  }
}
