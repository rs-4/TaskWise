import React, { useState } from "react";
import style from "./style.module.scss";
import Button from "../button";
import ButtonSearch from "../button/buttonSearch";
import SearchZone from "../layout/searchzone";
import Link from "next/link";

const App = () => {
  const [isSearchZoneOpen, setIsSearchZoneOpen] = useState(false);

  const handleSearchClick = () => {
    setIsSearchZoneOpen(!isSearchZoneOpen);
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
            <ButtonSearch
              label="Trouver un freelance"
              isActive={isSearchZoneOpen}
              onClick={handleSearchClick}
            ></ButtonSearch>
            <Button label="Créer mon compte"></Button>
          </div>
          <Link href="/signin" style={{ textDecoration: "none" }}>
            <span className={style.Header__Container_texte}>Me connecter</span>
          </Link>
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
