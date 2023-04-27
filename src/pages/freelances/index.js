import { useState, useEffect } from "react";
import useFetch from "@/hooks/useFetch";
import style from "./style.module.scss";
import { StyleRegistry } from "styled-jsx";
import LoadingSpinner from "@/components/laoder";
import NavbarContext from "@/context/navbarContext";
import { useRouter } from "next/router";

const FreelanceList = () => {
  const [token, setToken] = useState(null);
  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  const router = useRouter();
  const { query } = router;

  const [filters, setFilters] = useState({
    filters: {
      rate: { range: { 0: 0, 1: 500 } },
      exp: { range: { 0: 0, 1: 10 } },
      skills: query.skills,
    },
  });
  const { fetchData, data, loading, error } = useFetch({
    url: "/freelance/search",
    method: "POST",
    body: filters,
    token,
  });

  useEffect(() => {
    fetchData();
    console.log(filters);
    console.log(fetchData);
  }, [filters]);

  if (loading) {
    return <LoadingSpinner isLoad={true} />;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const freelances = data.freelances;

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  return (
    <div>
      <NavbarContext token={token} />
      <div className={style.container}>
        <div className={style.grid} onClick>
          {data.freelances &&
            data.freelances.map((freelance) => (
              <div className={style.card} key={freelance._id}>
                <h3>
                  {freelance.user.firstName} {freelance.user.lastName}
                </h3>
                <p>Years of experience: {freelance.yearOfExperience}</p>
                <p>Rate: {freelance.rate} € / day</p>
                <p>Skills: {freelance.skills.join(", ")}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default FreelanceList;
