
import './App.css';

/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import Header from "./Header";
import Home from "./Home"
import Contact from './Contact'
import Footer from "./Footer"
import Signup from './Signup'
import Profile from './Profile'
import {BrowserRouter, Routes, Route} from "react-router-dom" 
import Login from "./Login";
import MedicalInfo from './MedicalInfo';
import ChatBot from './ChatBot';
import MedicalPlanner from './MedicalPlanner'
import AboutUs from './AboutUs';
import Privacy from './Privacy';
import Terms from './Terms';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route
        path='/terms-and-conditions'
        element={(
          <>
          <Header />
          <Terms />
          <Footer />
          </>
        )} 
        />
      <Route
        path='/privacy'
        element={(
          <>
          <Header />
          <Privacy />
          <Footer />
          </>
        )} 
        />
      <Route
        path='/contact-us'
        element={(
          <>
          <Header />
          <Contact />
          <Footer />
          </>
        )} 
        />
      <Route
        path='/about-us'
        element={(
          <>
          <Header />
          <AboutUs />
          <Footer />
          </>
        )} 
        />
      <Route
        path='/medical-planner'
        element={(
          <>
          <Header />
          <MedicalPlanner />
          <Footer />
          </>
        )} 
        />
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
