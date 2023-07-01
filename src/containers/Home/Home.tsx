import React, {useState} from 'react';
import {Outlet, useLocation, useParams} from "react-router-dom";
import Categories from "../../components/Categories/Categories";
import Quotes from "../../components/Quotes/Quotes";

const Home = () => {
  return (
    <div className="d-flex justify-content-between m-4">
      <Categories />

      <Outlet />
    </div>
  );
};

export default Home;