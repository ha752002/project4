import classNames from "classnames/bind";
import React, { Component } from "react";
import styles from "./Sidebar.module.scss";

// const cx = classNames.bind(styles);

export default class Sidebar extends Component {
  render() {
    return (
      <>
        <aside>
          <h1>Sidebar</h1>
        </aside>
      </>
    );
  }
}
