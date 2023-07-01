import React, {useState} from 'react';
import Navbar from "./components/Navbar/Navbar";
import {Navigate, Route, Routes, useLocation, useParams} from "react-router-dom";
import Home from "./containers/Home/Home";
import Quotes from "./components/Quotes/Quotes";
import NewQuote from "./containers/NewQuote/NewQuote";
import QuoteForm from "./components/QuoteForm/QuoteForm";

const App = () => {
  const { pathname } = useLocation();

  return (
    <>
      <Navbar/>

      <div style={{paddingTop: 60}}>
        <Routes>
          <Route path={pathname === '/' ? '/' : '/quotes'} element={<Home/>}>
            <Route path="/quotes/:category" element={<Quotes />}>
              <Route path=":id" element={<QuoteForm />} />
            </Route>
            <Route path={pathname === '/' ? '/' : '/quotes'} element={<Quotes />}>
              <Route path=":id" element={<QuoteForm />} />
            </Route>
          </Route>


          <Route path="/new-quote" element={<NewQuote />} />

          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
      </div>
    </>
  );
};

export default App;
