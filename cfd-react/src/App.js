import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Page404 from './pages/Page404'
import { Footer, Header, Navbar } from './components'
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
    // <BrowserRouter>
    //   <Header />
    //   <Navbar />
    //   <Switch>
    //     <route path='/' exact component={Home} />
    //     {/* <route path='chi-tiet-khoa-hoc'><CourseDetail /></route>
    //     <route path='gioi-thieu-coin'><CoinInvite /></route> */}
    //     {/* <route path=''><Faq /></route>
    //     <route path=''><Email /></route>
    //     <route path=''><Cooperate /></route>
    //     <route path=''><Profile /> </route>
    //     <route path=''><Project /></route>
    //     <route path=''><Register /></route>
    //     <route path=''><Team /></route>
    //     <route path=''><Payment /></route>
    //     <route path=''><Course /></route>
    //     <route path=''><Page404 /></route> */}
    //   </Switch>
    //   <Footer />
    // </BrowserRouter>
    <>
      <Header />
      <Register />
      <Footer />
    </>
  );
}

export default App;
