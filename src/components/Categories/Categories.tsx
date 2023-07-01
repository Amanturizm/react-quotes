import React from 'react';
import {Link, useLocation} from "react-router-dom";
import { CATEGORIES } from "../../constants";

const Categories: React.FC = () => {
  return (
    <ul>
      <li className="fs-3">
        <Link to="/quotes" className="text-decoration-none text-white">All</Link>
      </li>

      {
        CATEGORIES.map(category => (
          <li className="fs-3" key={category.id}>
            <Link to={`/quotes/${category.id}`} className="text-decoration-none text-white">{category.title}</Link>
          </li>
        ))
      }
    </ul>
  );
};

export default Categories;