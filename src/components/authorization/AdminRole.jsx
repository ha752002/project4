import React from "react";
import {useSelector} from "react-redux";
import {ROLE_ADMIN} from "../../constants/role.js";
import {useNavigate} from "react-router-dom";
import NotFoundPage from "../../pages/common/NotFoundPage.jsx";


export default function AdminRole({ children }) {
  const CURRENT_USER_TYPE = useSelector(state => state.auth.userInfo.role);
  const navigate = useNavigate();
  console.log(CURRENT_USER_TYPE === ROLE_ADMIN);
  // console.log(111);
  if (CURRENT_USER_TYPE === ROLE_ADMIN) return <>{children}</>;
  return <NotFoundPage/>
}
