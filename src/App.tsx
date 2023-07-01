import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import Quotes from "./containers/Quotes/Quotes";

const App = () => (
  <>
    <Navbar />

    <div style={{ paddingTop: 60 }}>
      <Routes>
        <Route path={useLocation().pathname === '/' ? '/' : '/quotes'} element={<Quotes />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  </>
);

export default App;
