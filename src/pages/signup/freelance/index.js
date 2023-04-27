import React from "react";
import style from "./style.module.scss";
import Link from "next/link";
import Input from "../../../components/input";
import InputName from "../../../components/input/inputName";
import { useState, useEffect } from "react";
import Checkbox from "@/components/checkbox";
import ButtonValidate from "@/components/button/buttonValidate";
import Signin from "../../../components/layout/signin";
import LoadingSpinner from "@/components/laoder";
import {
  validEmail,
  validName,
  validPassword,
  validPhone,
} from "@/pages/regex";
import useFetch from "@/hooks/useFetch";

const Index = () => {
  const [secondStep, setSecondStep] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [validForm, setValidForm] = useState(Boolean(false));
  const [getError, setError] = useState("");

  const [userForm, setUserForm] = useState({
    lastName: "rayan",
    email: "rayanselmi100@gmail.com",
    firstName: "rayan",
    phone: "0400404040",
    password: "Rayan0602@",
    userType: "FREELANCE",
    confirmPassword: "Rayan0602@",
    address: {
      street: "rue de la paix",
      city: "paris",
      zipCode: "75000",
    },
  });

  const { fetchData, data, error, loading } = useFetch({
    url: "/auth/register",
    method: "POST",
    body: userForm,
    token: null,
  });

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
    if (validForm === true) {
      console.log("fetch");
      setSecondStep(true);
      fetchData();
    }
  }, [validForm]);

  const validateForm = () => {
    if (!validName.test(userForm.firstName)) {
      errorInput("firstName");
    } else {
      succesInput("firstName");
    }
    if (!validName.test(userForm.lastName)) {
      errorInput("lastName");
    } else {
      succesInput("lastName");
    }
    if (!validEmail.test(userForm.email)) {
      errorInput("email");
    } else {
      succesInput("email");
    }
    if (!validPhone.test(userForm.phone)) {
      errorInput("phone");
    } else {
      succesInput("phone");
    }
    if (!validPassword.test(userForm.password)) {
      errorInput("password");
    } else {
      if (userForm.password !== userForm.confirmPassword) {
        errorInput("password");
      } else {
        succesInput("password");
      }
    }
  };
  return (
    <Signin>
      {secondStep === false ? (
        <div className={style.Container__SecondZone}>
          <div className={style.Container__SecondZone__choiceInput}>
            <div className={style.ok}>
              <div className={style.Container__SecondZone__name}>
                <InputName
                  label="LastName"
                  type="text"
                  name="lastName"
                  value={userForm.lastName}
                  isRequired={true}
                  placeholder="lastname"
                  onChange={(e) => handleChange(e)}
                />
                <InputName
                  label="FirstName"
                  type="text"
                  name="firstName"
                  value={userForm.firstName}
                  isRequired={true}
                  placeholder="firstName"
                  onChange={(e) => handleChange(e)}
                />
              </div>
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
                label="PhoneNumber"
                type="text"
                name="phone"
                value={userForm.phone}
                isRequired={true}
                placeholder="enter your phoneNumber"
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
              <Input
                label="Confirm password"
                type="confirmPassword"
                name="confirmPassword"
                value={userForm.confirmPassword}
                isRequired={true}
                placeholder="confirm your password"
                onChange={(e) => handleChange(e)}
              />
              <div className={style.error}>{getError}</div>
              <Checkbox
                id="checkBox"
                label="I agree to the Privacy Policy"
                onChange={handleCheckboxChange}
                checked={isChecked}
              />
            </div>
          </div>
          <div className={style.Container__SecondZone__buttonzone}>
            <Link
              href="/signup"
              className={style.Container__SecondZone__buttonzone__cancel}
            >
              Précedent
            </Link>
            <ButtonValidate
              onClick={validateForm}
              label="Créer mon compte  >"
            />
          </div>
        </div>
      ) : (
        <>
          <LoadingSpinner isLoad={loading} />
        </>
      )}
    </Signin>
  );
};

export default Index;
