import React from 'react'

import Home from './pages/Home'
import Page404 from './pages/Page404'
import { Footer, Header } from './components'
import CourseDetail from './pages/CourseDetail'
import CoinInvite from './pages/CoinInvite'
import Faq from './pages/Faq'
import Email from './pages/Email'
import Cooperate from './pages/Cooperate'
import Profile from './pages/Profile'
import Project from './pages/Project'
import Register from './pages/Register'
import Team from './pages/Team'
import Payment from './pages/Payment'
import Course from './pages/Course'

function App() {
  return (
    <>
      <Header />
      {/* <Home /> */}
      {/* <Page404 /> */}
      {/* <CourseDetail /> */}
      {/* <CoinInvite /> */}
      {/* <Faq /> */}
      {/* <Email /> */}
      {/* <Cooperate /> */}
      {/* <Profile /> */}
      {/* <Project /> */}
      {/* <Register /> */}
      {/* <Team /> */}
      {/* <Payment /> */}
      <Course />
      <Footer />
    </>
  );
}

export default App;
