import React, { useRef } from "react";
import style from "./style.module.scss";
import Navbar from "../components/navbar";
import Searchzone from "../components/layout/searchzone";
import Typewriter from "typewriter-effect";
import { useState } from "react";
import { useEffect } from "react";
import NavbarContext from "../context/navbarContext";

const Index = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(true);
  };

  const handleChange = (e) => {
    console.log("click");
  };

  const [token, setToken] = useState(null);
  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  return (
    <>
      <div style={{ position: "fixed", top: 0 }}>
        <NavbarContext token={token}></NavbarContext>
      </div>

      <div className={style.App}>
        <div className={style.App__Container}>
          <div className={style.App__Container__title}>
            Entreprises & freelances étaient faits pour se rencontrer
          </div>

          <img className={style.image} src="./principal.jpg" alt="principal" />
        </div>
        <div className={style.FirstTexte}>
          Simplifiez votre travail indépendant avec TaskWise - une plateforme
          tout-en-un pour les freelances !" TaskWise est une plateforme de
          travail indépendant qui vous permet de gérer toutes les tâches de
          votre entreprise en un seul endroit .
        </div>{" "}
      </div>
    </>
  );
};

export default Index;
