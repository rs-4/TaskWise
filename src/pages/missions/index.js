import { createContext, useContext, useEffect, useState } from "react";
import useFetch from "@/hooks/useFetch";
import Freelances from "./freelances";
import Company from "./company";
import NavbarContext from "@/context/navbarContext";
import jwt_decode from "jwt-decode";

const TokenChecker = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const decodedHeader = jwt_decode(token);

  if (decodedHeader.body.userType === "FREELANCES") {
    return <Freelances>{children}</Freelances>;
  } else {
    return <Company>{children}</Company>;
  }
};

export default TokenChecker;
