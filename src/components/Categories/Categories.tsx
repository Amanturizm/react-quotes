import React from 'react';
import {NavLink} from "react-router-dom";
import {CATEGORIES} from "../../constants";

const Categories: React.FC = () => {
  return (
    <ul>
      <li className="fs-3">
        <NavLink to="/quotes">All</NavLink>
      </li>

      {
        CATEGORIES.map(category => (
          <li className="fs-3" key={category.id}>
            <NavLink to={category.id} />
          </li>
        ))
      }
    </ul>
  );
};

export default Categories;