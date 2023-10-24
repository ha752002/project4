import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./Header.module.scss";
import images from "@/assets/images";

const cx = classNames.bind(styles);

function Header() {
  return (
    <>
      <h1>header</h1>
    </>
  );
}

export default Header;
