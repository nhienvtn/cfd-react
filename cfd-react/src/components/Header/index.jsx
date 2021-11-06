import { NavLink } from "react-router-dom";
import { useContext } from "react";
import {
    Context
} from "../../App";
export function Header() {
    const { user, setPopupLogin } = useContext(Context)
    function showLogin() {
        setPopupLogin(true)

    }
    return (
        <header id="header">
            <div className="wrap">
                <div className="menu-hambeger">
                    <div className="button">
                        <span />
                        <span />
                        <span />
                    </div>
                    <span className="text">menu</span>
                </div>
                <a href="#" className="logo">
                    <img src="img/logo.svg" alt="" />
                    <h1>CFD</h1>
                </a>
                <div className="right">
                    {
                        user.name ?
                            <div className="have-login">
                                <div className="account">
                                    <a href="#" className="info">
                                        <div className="name">{user.name}</div>
                                        <div className="avatar">
                                            <img src="img/avt.png" alt="" />
                                        </div>
                                    </a>
                                </div>
                                <div className="hamberger">
                                </div>
                                <div className="sub">
                                    <NavLink to="#">Khóa học của tôi</NavLink>
                                    <NavLink to="#">Thông tin tài khoản</NavLink>
                                    <NavLink to="#">Đăng xuất</NavLink>
                                </div>
                            </div> :
                            <div className="not-login bg-none">
                                <a href="#" className="btn-register" onClick={showLogin}>Đăng nhập</a>
                                <a href="login.html" class="btn main btn-open-login">Đăng ký</a>
                            </div>
                    }



                </div>
            </div>
        </header>
    )
}