import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "../components/Home.js";
import Failure from "./Failure.js";
import FlashCardBack from "./FlashCardBack.js";
import FlashCardFront from "./FlashCardFront.js";
import Header from "./Header.js";
import Success from "./Success.js";

export default function App(){
    return (
      <BrowserRouter>
      
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/FlashCardFront" element={<FlashCardFront/>}/>
          <Route path="/FlashCardBack" element={<FlashCardBack/>}/>
          <Route path="/Success" element={<Success/>}/>
          <Route path="/Failure" element={<Failure/>}/>
        </Routes>
      </BrowserRouter>
    )
}
