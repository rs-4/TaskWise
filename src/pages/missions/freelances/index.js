import React from "react";
import NavbarContext from "@/context/navbarContext";

const Index = () => {
  return (
    <div>
      <NavbarContext token={localStorage.getItem("token")}></NavbarContext>
      Freelances
    </div>
  );
};

export default Index;
