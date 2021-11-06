import React, { createContext, useState } from 'react'
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
import PopupLogin from './components/PopupLogin'

export const Context = createContext()
function App() {
  const [user, setUser] = useState({
    name: ""
  })
  const [popupLogin, setPopupLogin] = useState(false)

  return (
    <BrowserRouter>
      <Context.Provider value={{ user, setUser, popupLogin, setPopupLogin }} >
        <Header />
        <Navbar />
        <PopupLogin />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/chi-tiet-khoa-hoc'><CourseDetail /></Route>
          <Route path='/gioi-thieu-coin'><CoinInvite /></Route>
          <Route path='/thong-tin-ca-nhan'><Profile /> </Route>
          <Route path='/faq'><Faq /></Route>
          <Route path='/email'><Email /></Route>
          <Route path='/hop-tac'><Cooperate /></Route>
          <Route path='/du-an'><Project /></Route>
          <Route path='/dang-ky'><Register /></Route>
          <Route path='/team'><Team /></Route>
          <Route path='/thanh-toan'><Payment /></Route>
          <Route path='/khoa-hoc'><Course /></Route>
          <Route ><Page404 /></Route>
        </Switch>
        <Footer />
      </Context.Provider>

    </BrowserRouter>
    // <>
    //   <Header />
    //   <Register />
    //   <Footer />
    // </>
  );
}

export default App;
