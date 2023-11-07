import React from "react";

export default function AdminRole({ children }) {
  if (CURRENT_USER_TYPE === USER_TYPES.ADMIN_USER) return <>{children}</>;
}
