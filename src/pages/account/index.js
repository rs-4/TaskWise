import { useState, useEffect } from "react";
import useFetch from "@/hooks/useFetch";
import styles from "./style.module.scss";
import LoadingSpinner from "@/components/laoder";
import NavbarContext from "../../context/navbarContext";

const ProfilePage = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const { fetchData, data, loading, error } = useFetch({
    url: "/user",
    method: "GET",
    body: null,
    token: token,
  });

  useEffect(() => {
    fetchData();
  }, [token]);

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    zipCode: "",
  });

  useEffect(() => {
    if (data && data.success) {
      setUser({
        firstName: data.user.firstName,
        lastName: data.user.lastName,
        email: data.user.email,
        phone: data.user.phone,
        userType: data.user.userType,
        phone: data.user.phone,
        street: data.user.address.street,
        city: data.user.address.city,
        zipCode: data.user.address.zipCode,
      });
    }
  }, [data]);

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const { fetchData: fetchUpdateData } = useFetch({
    url: "/user",
    method: "PUT",
    body: user,
    token: token,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchUpdateData();
  };

  if (loading) {
    return <LoadingSpinner isLoad={true} />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data || !data.success) {
    return <div>Please log in</div>;
  }

  const useUserType = () => {
    if (user.userType === "company") {
      return <h1>Company</h1>;
    } else {
      return <h1>Freelance</h1>;
    }
  };

  return (
    <>
      <NavbarContext token={localStorage.getItem("token")} />
      <div className={styles.wrapper}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={user.firstName}
            onChange={handleChange}
          />

          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={user.lastName}
            onChange={handleChange}
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />

          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={user.phone}
            onChange={handleChange}
          />

          <label htmlFor="street">Street:</label>
          <input
            type="text"
            id="street"
            name="street"
            value={user.street}
            onChange={handleChange}
          />

          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={user.city}
            onChange={handleChange}
          />

          <label htmlFor="zipCode">Zip Code:</label>
          <input
            type="text"
            id="zipCode"
            name="zipCode"
            value={user.zipCode}
            onChange={handleChange}
          />

          <label htmlFor="userType">
            <div
              type="text"
              id="userType"
              name="userType"
              onChange={handleChange}
            >
              {useUserType}
            </div>
          </label>

          <div className={styles.Button} onClick={handleSubmit}>
            Save Changes
          </div>
        </form>
      </div>
    </>
  );
};
export default ProfilePage;
