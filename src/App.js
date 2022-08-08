import React from "react";
import Below_file from "./Below_file"
import Portfolio from "./Portfolio"
import Scrolling_page from "./Scrolling_page"
import Profile from "./Profile"
import Navbar from './Navbar'

import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (

    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="#scoll" element={ <Scrolling_page /> } />
          <Route path="#portfolio" element={ <Portfolio /> } />
          <Route path="#below" element={ <Below_file />} />
        </Routes>
      </BrowserRouter>

      <Profile />
      <Scrolling_page /> 
      <Portfolio /> 
      <Below_file />
    </>
  )
}
