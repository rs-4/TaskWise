import style from "./style.module.scss";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
function SignupButton({ label, onClick, isActive }) {
  const buttonClass = classNames(style.signup_btn, {
    [style.isActive]: isActive,
  });

  return (
    <>
      <button className={buttonClass} onClick={onClick}>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          style={{ color: "#000000" }}
        />{" "}
        {label}
      </button>
    </>
  );
}

export default SignupButton;
