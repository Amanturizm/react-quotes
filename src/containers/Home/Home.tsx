import React from 'react';
import { Outlet } from "react-router-dom";
import Categories from "../../components/Categories/Categories";

const Home = () => {
  return (
    <div className="d-flex justify-content-between m-4">
      <Categories />

      <Outlet />
    </div>
  );
};

export default Home;