import React from "react";
import clsx from "clsx";
import Styles from "./Header.module.scss";

export default function Header() {
  const userInfo = {
    /* your user info data here */
  };

  return (
    <div className={clsx(Styles.hearder, Styles.text)}>
      <div className={Styles.frame}>
        <div className={Styles.search}>
          <img src="/src/assets/images/header/search.svg" alt="" />
          <input type="text" placeholder="Search" />
        </div>
        <div className={Styles.Notification}>
          <img src="/src/assets/images/header/bell.svg" alt="" />
          <img src="/src/assets/images/header/mail_2.svg" alt="" />
          <div className={Styles.user}>
            <div className={Styles.avatar} />
            <div className={Styles.name_user}>
              {/* Uncomment the following lines to use userInfo data */}
              {/* <span>{userInfo?.username}</span> */}
              {/* <span className={Styles.text_13}>{userInfo?.role}</span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
