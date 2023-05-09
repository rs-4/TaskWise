import React from "react";
import NavbarContext from "@/context/navbarContext";
import Button from "../../../components/button";
import Input from "../../../components/input";
import useFetch from "@/hooks/useFetch";

const Index = () => {
  const [dateStart, setDateStart] = React.useState("");
  const [dateEnd, setDateEnd] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [skills, setSkills] = React.useState("");
  const [company, setCompany] = React.useState("");

  const { fetchData, data, loading, error } = useFetch({
    url: "/mission",
    method: "POST",
    token: localStorage.getItem("token"),
    body: {
      title: title,
      description: description,
      company: company,
      skills: skills,
      amount: amount,
      dateStart: dateStart,
      dateEnd: dateEnd,
    },
  });

  return (
    <div>
      <NavbarContext token={localStorage.getItem("token")}></NavbarContext>
      Company
      <Input
        type="text"
        placeholder="Title of the mission"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></Input>
      <Input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></Input>
      <Input
        type="text"
        placeholder="Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      ></Input>
      <Input
        type="text"
        placeholder="Skills"
        value={skills}
        onChange={(e) => setSkills(e.target.value)}
      ></Input>
      <Input
        type="text"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      ></Input>
      <Input
        type="text"
        placeholder="Date start"
        value={dateStart}
        onChange={(e) => setDateStart(e.target.value)}
      ></Input>
      <Input
        type="text"
        placeholder="Date end"
        value={dateEnd}
        onChange={(e) => setDateEnd(e.target.value)}
      ></Input>
      <div
        style={{ cursor: "pointer" }}
        onClick={() => {
          fetchData();
        }}
      >
        Create
      </div>
    </div>
  );
};

export default Index;
