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
    lastName: "",
    email: "",
    firstName: "",
    phone: "",
    password: "",
    userType: "COMPANY",
    confirmPassword: "",
    address: {
      street: "",
      city: "",
      zipCode: "",
    },
  });

  const [companyForm, setCompanyForm] = useState({
    address: {
      street: "",
      city: "",
      zipCode: "",
    },
    name: "",
    siret: "",
    status: "",
  });

  const { fetchData, data, error, loading } = useFetch({
    url: "/auth/register",
    method: "POST",
    body: userForm,
    token: null,
  });
  const {
    fetchData: Login,
    data: loginData,
    error: loginError,
    loading: loginLoading,
  } = useFetch({
    url: "/auth/login",
    method: "POST",
    body: userForm,
  });

  const {
    fetchData: freelancerData,
    data: freelancer,
    error: freelancerError,
    loading: freelancerLoading,
  } = useFetch({
    url: "/auth/freelance",
    method: "POST",
    body: userForm,
    token: data.token,
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
      Login();
      console.log(loginData.token);
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

  const handleCreateCompany = () => {
    console.log(data);
    freelancerData();
  };

  const statusOptions = ["SAS", "SASU", "SARL", "EURL", "SA"];

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
          <div className={style.Container__SecondZone}>
            <div className={style.Container__SecondZone__choiceInput}>
              <div className={style.ok}>
                <div className={style.Container__SecondZone__name}></div>
                <InputName
                  label="Company Name"
                  type="text"
                  name="name"
                  value={companyForm.name}
                  isRequired={true}
                  placeholder="Enter your company name"
                  onChange={(e) => handleChange(e)}
                />
                <label>
                  Status
                  <select
                    name="status"
                    value={userForm.status}
                    className={style.select}
                    onChange={(e) => handleChange(e)}
                    required
                  >
                    <option value="">Please choose an option</option>
                    {statusOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>
                <InputName
                  label="SIRET"
                  type="text"
                  name="siret"
                  value={companyForm.siret}
                  isRequired={true}
                  placeholder="Enter your SIRET"
                  onChange={(e) => handleChange(e)}
                />
                <InputName
                  label="Street"
                  type="text"
                  name="street"
                  value={companyForm.address.street}
                  isRequired={true}
                  placeholder="Enter your street"
                  onChange={(e) => handleAddressChange(e)}
                />
                <InputName
                  label="City"
                  type="text"
                  name="city"
                  value={companyForm.address.city}
                  isRequired={true}
                  placeholder="Enter your city"
                  onChange={(e) => handleAddressChange(e)}
                />
                <InputName
                  label="Zip Code"
                  type="text"
                  name="zipCode"
                  value={companyForm.address.zipCode}
                  isRequired={true}
                  placeholder="Enter your zip code"
                  onChange={(e) => handleAddressChange(e)}
                />
                <ButtonValidate
                  onClick={handleCreateCompany}
                  label="Créer mon compte  >"
                />
              </div>
            </div>
          </div>
        </>
      )}
    </Signin>
  );
};

export default Index;
