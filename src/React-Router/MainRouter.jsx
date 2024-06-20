import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './Router.css'
import Registration from "./Registration";
import LoginPage from "./LoginPage";
import Home from "./Home";
import NoteFound from "./NoteFound";
import { Routes, Route } from "react-router-dom";

const MainRouter = () => {
  return (
  <div className='Router-App'>
      <Routes>
        <Route path='registration' element={<Registration />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='Home' element={<Home />} />
        <Route path="/" element={<Registration />} />
        <Route path='*' element={<NoteFound />} />
      </Routes>
    </div>
  );
};

export default MainRouter;
