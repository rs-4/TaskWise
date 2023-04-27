import React from "react";
import style from "./style.module.scss";

const Checkbox = ({ label, onChange, checked }) => {
  return (
    <div className={style.checkboxContainer}>
      <input
        type="checkbox"
        className={style.checkbox}
        checked={checked}
        onChange={onChange}
        id={label}
      />
      <label htmlFor={label} className={style.checkboxLabel}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
