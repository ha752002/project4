import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ROLE_ADMIN} from "../../constants/role.js";
import {useNavigate} from "react-router-dom";
import NotFoundPage from "../../pages/common/NotFoundPage.jsx";
import {getUserInfo} from "../../redux/slice/authSlice.js";
import {PENDING} from "../../constants/apiStatus.js";
import {loadingSlice} from "../../redux/slice/loadingSlice.js";

const {turnOn, turnOff} = loadingSlice.actions
export default function AdminRole({ children }) {
  const dispatch = useDispatch()
  const {userInfo: {roles}, status} = useSelector(state => state.auth);

  useEffect(() => {
    if(!roles){
      dispatch(getUserInfo())
    }
  }, []);

  useEffect(() => {
    dispatch(status === PENDING ? turnOn() : turnOff())
  }, [status]);

  if (roles?.find(role => role.name  === ROLE_ADMIN)) return <>{children}</>;
  return <NotFoundPage/>
  // return <>{children}</>;
}
