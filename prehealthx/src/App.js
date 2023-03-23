
import './App.css';

/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import Header from "./Header";
import Home from "./Home"
import Footer from "./Footer"
import Signup from './Signup'
import Profile from './Profile'
import {BrowserRouter, Routes, Route} from "react-router-dom" 
import Login from "./Login";
import MedicalInfo from './MedicalInfo';
import ChatBot from './ChatBot';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route
        path='/chatbot'
        element={(
          <>
          <Header />
          <ChatBot />
          <Footer />
          </>
        )} 
        />
      <Route
        path='/medical-info'
        element={(
          <>
          <Header />
          <MedicalInfo />
          <Footer />
          </>
        )} 
        />
      <Route
        path='/profile'
        element={(
          <>
          <Header />
          <Profile />
          <Footer />
          </>
        )} 
        />
      <Route
        path='/signup'
        element={(
          <>
          <Signup />
          </>
        )} 
        />
      <Route
        path='/login'
        element={(
          <>         
          <Login />         
          </>
        )} 
        />
        <Route
        path='/'
        element={(
          <>
          <Header />
          <Home />
          <Footer/>
          </>
        )} 
        />
        </Routes></BrowserRouter>
    </div>
  );
}

export default App;
