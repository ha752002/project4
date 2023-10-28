import classNames from "classnames/bind";

// import "./DefaultLayout.module.scss";
import Header from "../WebComponents/Header";

// const cx = classNames.bind(styles);

// function WebDefaultLayout({ children }) {
//   return (
//     <div>
//       <Header />
//       <div>
//         <div>{children}</div>
//       </div>
//     </div>
//   );
// }

// export default WebDefaultLayout;
import React, { Component } from "react";
import clsx from "clsx";

export default class WebDefaultLayout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        {" "}
        <div>{this.props.children}</div>
      </>
    );
  }
}
