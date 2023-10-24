import React from "react";
import classNames from "classnames";

import Header from "../AdminComponents/Header";
import styles from "./DefaultLayout.module.scss";
import Sidebar from "./Sidebar";

const cx = classNames.bind(styles);

function AdminDefaultLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>
        <Sidebar />
        <div className={cx("content")}>{children}</div>
      </div>
    </div>
  );
}

export default AdminDefaultLayout;
