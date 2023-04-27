import React from "react";
import styles from "./style.module.scss";
import Link from "next/link";

const Button = ({ image, title, subtitle, link }) => {
  return (
    <Link href={"/signup" + link} style={{ textDecoration: "none" }}>
      <button className={styles.Button__button}>
        <img src={image} alt="image" className={styles.Button__image} />
        <div className={styles.Button__content}>
          <div className={styles.Button__title}>{title}</div>
          <div className={styles.Button__subtitle}>{subtitle}</div>
        </div>
      </button>
    </Link>
  );
};

export default Button;
