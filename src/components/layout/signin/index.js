import React from "react";
import style from "./style.module.scss";
import Link from "next/link";

const Index = ({ children, signup }) => {
  return (
    <div className={style.App}>
      <div className={style.Container}>
        <div className={style.Container__FirstZone}>
          <div>
            <Link href="/" style={{ textDecoration: "none" }}>
              <div className={style.Container__FirstZone__title}>
                <span className={style.Container__FirstZone__title_task}>
                  Task
                </span>
                <span className={style.Container__FirstZone__title_wise}>
                  Wise
                </span>
              </div>
            </Link>
          </div>
          {signup ? (
            <Link href="/signup">
              <span className={style.Container__FirstZone__link}>
                S'inscrire
              </span>
            </Link>
          ) : (
            <Link href="/signin">
              <span className={style.Container__FirstZone__link}>
                Me connecter
              </span>
            </Link>
          )}
        </div>
        {children}
        <div className={style.Container__LastZone}>2023 All right reserved</div>
      </div>
      <img
        src="../signUpImage.jpg"
        alt="signImage"
        className={style.SignImage}
      />
    </div>
  );
};

export default Index;
