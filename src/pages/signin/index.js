import React from "react";
import style from "./style.module.scss";
import Link from "next/link";
import Input from "../../components/input";
import { useState, useEffect } from "react";
import ButtonValidate from "@/components/button/buttonValidate";
import Signin from "../../components/layout/signin";
import LoadingSpinner from "@/components/laoder";
import { validEmail, validPassword } from "@/pages/regex";
import useFetch from "@/hooks/useFetch";
import { useRouter } from "next/router";
import { useContext } from "react";
import UserContext from "@/context/UserContext";
import Cookies from "js-cookie";

const Index = () => {
  const router = useRouter();
  const { login } = useContext(UserContext);
  const [secondStep, setSecondStep] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [validForm, setValidForm] = useState(Boolean(false));
  const [getError, setError] = useState("");

  const [userForm, setUserForm] = useState({
    email: "",
    password: "",
  });

  const [token, setToken] = useState();

  const { fetchData, data, error, loading } = useFetch({
    url: "/auth/login",
    method: "POST",
    body: userForm,
    token: null,
  });
  const {
    data: user,
    error: userError,
    loading: userLoading,
    fetchData: fetchDataUser,
  } = useFetch({ url: "/user", method: "GET", body: null, token: token });

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleChange = (e) => {
    setUserForm({ ...userForm, [e.target.name]: e.target.value });
  };

  const errorInput = (name) => {
    setError(`${name} is not valid`);
    document.getElementsByName(`${name}`)[0].style.border = "1px solid red";
    setValidForm(false);
    console.log(validForm);
    console.log(userForm);
  };

  const succesInput = (name) => {
    setValidForm(true);
  };

  useEffect(() => {
    if (data.token) {
      localStorage.setItem("token", data.token);
      router.push("/freelances");
    }
  }, [data]);

  useEffect(() => {
    fetchDataUser();
    if (user.success) {
      login({
        firstName: user.user.firstName,
        lastName: user.user.lastName,
        email: user.user.email,
      });
      router.push("/account/profil");
    }
  }, [token, user]);

  useEffect(() => {
    if (validForm === true) {
      setSecondStep(true);
      fetchData();
    }
  }, [validForm]);

  const validateForm = () => {
    if (!validEmail.test(userForm.email)) {
      errorInput("email");
    } else {
      succesInput("email");
    }
    if (!validPassword.test(userForm.password)) {
      errorInput("password");
    } else {
      succesInput("password");
    }
  };

  const statusOptions = ["SAS", "SASU", "SARL", "EURL", "SA"];

  return (
    <Signin signup={true}>
      {secondStep === false ? (
        <div className={style.Container__SecondZone}>
          <div className={style.Container__SecondZone__choiceInput}>
            <div className={style.ok}>
              <div className={style.Container__SecondZone__name}></div>
              <Input
                label="Email"
                type="text"
                name="email"
                value={userForm.email}
                isRequired={true}
                placeholder="enter your email"
                onChange={(e) => handleChange(e)}
              />
              <Input
                label="Password"
                type="password"
                name="password"
                value={userForm.password}
                isRequired={true}
                placeholder="enter your password"
                onChange={(e) => handleChange(e)}
              />
              <div className={style.error}>{getError}</div>
              <ButtonValidate onClick={validateForm} label="Me connecter" />
            </div>
          </div>
        </div>
      ) : (
        <>
          <LoadingSpinner></LoadingSpinner>
        </>
      )}
    </Signin>
  );
};

export default Index;
