import classNames from "classnames/bind";
// import "./DefaultLayout.module.scss";

function WebDefaultLayout({ children }) {
  return (
    <div>
      {/* <Header /> */}
      <div>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default WebDefaultLayout;
