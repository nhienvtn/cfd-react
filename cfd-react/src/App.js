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
    <BrowserRouter>
      <Header />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/chi-tiet-khoa-hoc'><CourseDetail /></Route>
        <Route path='/gioi-thieu-coin'><CoinInvite /></Route>
        <Route path='/profile'><Profile /> </Route>
        {/* <Route path=''><Faq /></Route>
        <Route path=''><Email /></Route>
        <Route path=''><Cooperate /></Route>
        <Route path=''><Project /></Route>
        <Route path=''><Register /></Route>
        <Route path=''><Team /></Route>
        <Route path=''><Payment /></Route>
        <Route path=''><Course /></Route> */}
        <Route ><Page404 /></Route>
      </Switch>
      <Footer />
    </BrowserRouter>
    // <>
    //   <Header />
    //   <Register />
    //   <Footer />
    // </>
  );
}

export default App;
