import React, { useRef } from "react";
// nav
import NavB from "./NavB";
import { useAuth0 } from "@auth0/auth0-react";


const Home = () => {
  const { isAuthenticated, user } = useAuth0();

  return (
    isAuthenticated && (
      <>
        <NavB />
        <h1 className="home-head"> Upcoming Games </h1>
      </>
    )
  );
};

export default Home;
