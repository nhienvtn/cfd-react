import { Course, Info, Project, Payment, Coin } from "./components";
// import Course from "./components/Course";
// import Info from "./components/Info";
// import Project from "./components/Project";
// import Payment from "./components/Payment";
// import Coin from "./components/Coin";
import { Switch, Route, Link, NavLink, useRouteMatch, useHistory } from "react-router-dom";
import { useState } from "react";

export default function Profile() {

    let { url } = useRouteMatch()

    return (
        <main className="profile" id="main">
            <section>
                <div className="top-info">
                    <div className="avatar">
                        {/* <span class="text">H</span> */}
                        <img src="img/avatar-lg.png" alt="" />
                        <div className="camera" />
                    </div>
                    <div className="name">trần nghĩa</div>
                    <p className="des">Thành viên của team CFD1-OFFLINE</p>
                </div>
                <div className="container">
                    <div className="tab">
                        <div className="tab-title">
                            <NavLink exact to={`${url}`} >Thông tin tài khoản</NavLink>
                            <NavLink to={`${url}/khoa-hoc`}>Khóa học của bạn</NavLink>
                            <NavLink to={`${url}/du-an`}>Dự án đã làm</NavLink>
                            <NavLink to={`${url}/thanh-toan`}>Lịch sử thanh toán</NavLink>
                            <NavLink to={`${url}/coin`}>Quản lý COIN của tôi</NavLink>
                        </div>
                        <div className="tab-content">
                            <Switch>
                                <Route path={`${url}`} exact component={Info} />
                                <Route path={`${url}/khoa-hoc`} component={Course} />
                                <Route path={`${url}/du-an`} component={Project} />
                                <Route path={`${url}/thanh-toan`} component={Payment} />
                                <Route path={`${url}/coin`} component={Coin} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}