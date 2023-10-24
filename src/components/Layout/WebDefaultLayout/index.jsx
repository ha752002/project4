import classNames from "classnames/bind";

import "./DefaultLayout.module.scss";
import Header from "../WebComponents/Header";

// const cx = classNames.bind(styles);

function WebDefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default WebDefaultLayout;
