import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import {Navigate, Route, Routes, useLocation} from "react-router-dom";

const App = () => (
  <>
    <Navbar />

    <Routes>
      <Route path={useLocation().pathname === '/' ? '/' : '/quotes'} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </>
);

export default App;
