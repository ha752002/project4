import React from "react";
const USER_TYPES = {
  PUBLIC: "public User",
  NORMAL_USER: "Normal User",
  ADMIN_USER: "Admin User",
};

const CURRENT_USER_TYPE = USER_TYPES.ADMIN_USER;

export default function AdminRole({ children }) {
  console.log(CURRENT_USER_TYPE === USER_TYPES.ADMIN_USER);
  // console.log(111);
  if (CURRENT_USER_TYPE === USER_TYPES.ADMIN_USER) return <>{children}</>;
}
