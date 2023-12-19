import React from "react";
import clsx from "clsx";
import Styles from "./Header.module.scss";
import ButtonLogout from "../../../Button/ButtonLogout.jsx";
import {useDispatch} from "react-redux";
import {authSlice} from "../../../../redux/slice/authSlice.js";
import {useNavigate} from "react-router-dom";
const {logout} = authSlice.actions

export default function Header() {
  const userInfo = {
    /* your user info data here */
  };
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const handleLogoutClick = () => {
    dispatch(logout())
    navigator("/")
  }
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
            {/*<ToggleColorMode></ToggleColorMode>*/}
            <div>
              <ButtonLogout onclick={handleLogoutClick}/>
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
