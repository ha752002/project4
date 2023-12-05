import classNames from "classnames/bind";
import Header from "../WebComponents/Header";
import Footer from "../WebComponents/Footer";
// import "./DefaultLayout.module.scss";

function WebDefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div>
        <div>{children}</div>
      </div>
      <Footer />
    </div>
  );
}

export default WebDefaultLayout;
