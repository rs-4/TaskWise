import { useState } from "react";
import { useRouter } from "next/router";
import style from "./style.module.scss";

export default function SearchZone() {
  const router = useRouter();
  const [filters, setFilters] = useState({
    rate: { min: 0, max: null },
    experience: { min: null, max: null },
    skills: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const queryParams = new URLSearchParams({
      rateMin: filters.rate.min,
      rateMax: filters.rate.max,
      experienceMin: filters.experience.min,
      experienceMax: filters.experience.max,
      skills: filters.skills,
    }).toString();
    router.push(`/freelances?${queryParams}`);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  return (
    <div className={style.Searchzone}>
      <form onSubmit={handleSubmit} className={style.Form}>
        <label className={style.Label}>
          Rate:
          <input
            className={style.Input}
            type="number"
            name="rate.min"
            value={filters.rate.min}
            onChange={handleChange}
            placeholder="Min"
          />
          <input
            className={style.Input}
            type="number"
            name="rate.max"
            value={filters.rate.max}
            onChange={handleChange}
            placeholder="Max"
          />
        </label>
        <label className={style.Label}>
          Experience:
          <input
            className={style.Input}
            type="number"
            name="experience.min"
            value={filters.experience.min}
            onChange={handleChange}
            placeholder="Min"
          />
          <input
            className={style.Input}
            type="number"
            name="experience.max"
            value={filters.experience.max}
            onChange={handleChange}
            placeholder="Max"
          />
        </label>
        <label className={style.Label}>
          Skills:
          <input
            className={style.Input}
            type="text"
            name="skills"
            value={filters.skills}
            onChange={handleChange}
          />
        </label>
        <div className={style.Button} onClick={handleSubmit}>
          Rechercher
        </div>
      </form>
    </div>
  );
}
