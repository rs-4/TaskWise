import { createContext, useContext, useEffect, useState } from "react";
import Navbar from "../components/navbar";
import NavbarConnected from "../components/navbarConnected";

const TokenChecker = ({ token, children }) => {
  if (token) {
    return <NavbarConnected>{children}</NavbarConnected>;
  } else {
    return <Navbar>{children}</Navbar>;
  }
};

export default TokenChecker;
