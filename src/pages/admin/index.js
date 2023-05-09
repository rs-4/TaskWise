import React, { useState } from "react";
import NavbarContext from "@/context/navbarContext";
import useFetch from "@/hooks/useFetch";
import { useEffect } from "react";
import styles from "./style.module.scss";

const Admin = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const { fetchData, data, loading, error } = useFetch({
    url: "/skill",
    method: "GET",
  });

  const {
    fetchData: Userlist,
    data: data3,
    loading: loading3,
    error: error3,
  } = useFetch({
    url: "/user",
    method: "GET",
    token: token,
  });

  const [editName, setEditName] = useState("");
  const [newSkillName, setNewSkillName] = useState("");
  const [userForm, setUserForm] = useState({
    name: newSkillName,
  });

  useEffect(() => {
    fetchData();
  }, []);

  const {
    fetchData: handleCreate,
    data: data2,
    loading: loading2,
    error: error2,
  } = useFetch({
    url: "/skill",
    method: "POST",
    token: token,
    body: { name: newSkillName },
  });

  const handleDelete = (id) => {
    handleDelete();
    const {
      fetchData: handleDelete,
      data,
      loading,
      error,
    } = useFetch({
      url: `/skill/${id}`,
      method: "DELETE",
      token: token,
    });
  };

  return (
    <div>
      <NavbarContext token={token}></NavbarContext>
      <div className={styles.container}>
        <div className={styles.createSkill}>
          <input
            type="text"
            placeholder="New skill name"
            value={newSkillName}
            onChange={(e) => setNewSkillName(e.target.value)}
          />
          <button onClick={handleCreate}>Create</button>
        </div>
        {data &&
          data.success &&
          data.skills.map((skill) => {
            return (
              <div key={skill._id} className={styles.skill}>
                <div className={styles.skillName}>{skill.name}</div>
                <input
                  type="text"
                  placeholder="New skill name"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                />
                <button onClick={() => handleEditSkill(skill._id)}>Edit</button>
                <button onClick={() => handleDelete(skill._id)}>Delete</button>
              </div>
            );
          })}
      </div>
      <div className={styles.container}>
        {data3 &&
          data3.success &&
          data3.map((user) => {
            return (
              <div key={skill._id} className={styles.skill}>
                <div className={styles.skillName}>{skill.name}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Admin;
