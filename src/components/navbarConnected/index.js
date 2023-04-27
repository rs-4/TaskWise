import React, { useState } from "react";
import style from "./style.module.scss";
import Button from "../button";
import ButtonSearch from "../button/buttonSearch";
import SearchZone from "../layout/searchzone";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineLogout } from "react-icons/ai";

const App = () => {
  const router = useRouter();
  const [isSearchZoneOpen, setIsSearchZoneOpen] = useState(false);

  const handleProfil = () => {
    router.push("/account");
  };
  const handleMission = () => {
    router.push("/missions");
  };

  const handleLogout = () => {
    console.log("ok");
    localStorage.removeItem("token");
    if (router.pathname === "/") {
      router.reload();
    } else {
      router.push("/");
    }
  };

  return (
    <>
      <div className={style.Header}>
        <Link href="/" style={{ textDecoration: "none" }}>
          <div className={style.Header__title}>
            <span className={style.Header__title_task}>Task</span>
            <span className={style.Header__title_wise}>Wise</span>
          </div>
        </Link>
        <div className={style.Header__Container}>
          <div className={style.Header__Container__Buttonzone}>
            <div className={style.Profil} onClick={handleMission}>
              Mes missions
            </div>
            <div className={style.Profil} onClick={handleProfil}>
              Mon Profil
            </div>
          </div>
          <div className={style.Header__Container_texte} onClick={handleLogout}>
            <AiOutlineLogout />
          </div>
        </div>
      </div>
      {isSearchZoneOpen && (
        <div className={style.SearchZone_overlay}>
          <SearchZone />
        </div>
      )}
    </>
  );
};

export default App;
