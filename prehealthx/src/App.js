
import './App.css';

/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import ErrorBoundary from './ErrorBoundary';
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
import Update from './Update';
import MedicalRecords from './MedicalRecords';
import MedicalNews from './MedicalNews';
import Communications from './Communications';
import {Helmet} from 'react-helmet'

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
      <Helmet>
                <meta charSet="utf-8" />
                <title>PreHealthX</title>
                <link rel="canonical" href="https://pre-healthx.web.app" />
                <meta name="description" content="Get accurate and up-to-date medical information with PreHealthX - the user-friendly and secure medicine information sheet for patients, healthcare professionals, and caregivers." />
            </Helmet>
      <BrowserRouter>
      <Routes>
      <Route
        path='/communications'
        element={(
          <>
          <Header />
          <Communications />
          <Footer />
          </>
        )} 
        />
      <Route
        path='/medical-news'
        element={(
          <>
          <Header />
          <MedicalNews />
          <Footer />
          </>
        )} 
        />
      <Route
        path='/medical-records'
        element={(
          <>
          <Header />
          <MedicalRecords />
          <Footer />
          </>
        )} 
        />
      <Route
        path='/update'
        element={(
          <>
          <Header />
          <Update />
          <Footer />
          </>
        )} 
        />
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
    </ErrorBoundary>
  );
}

export default App;
