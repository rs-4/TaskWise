import React from "react";
import style from "./style.module.scss";
import SelectAccountInput from "../../components/selectAccountInput";
import SignImage from "../../../public/signImage.png";
import Link from "next/link";
import Signin from "../../components/layout/signin";

const Index = () => {
  return (
    <Signin>
      <div className={style.Container__SecondZone}>
        <div className={style.Container__SecondZone__choiceInput}>
          <div className={style.Container__SecondZone__title}>
            Qui êtes vous ?
          </div>
          <div>
            <SelectAccountInput
              link="/client"
              image="./Woman.png"
              title="Client"
              subtitle="Je cherche des clients"
            ></SelectAccountInput>
          </div>
          <div>
            <SelectAccountInput
              link="/freelance"
              image="./Guy.png"
              title="Freelance"
              subtitle="Je créé mon profil"
            ></SelectAccountInput>
          </div>
        </div>
      </div>
    </Signin>
  );
};

export default Index;
