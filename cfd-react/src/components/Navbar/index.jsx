import { NavLink } from "react-router-dom";

export function Navbar() {
    return (
        <nav className="nav">
            <ul>
                <li className="li_login">
                    <NavLink to="!#">Đăng ký / Đăng nhập</NavLink>
                </li>
                <li className="active">
                    <NavLink to="/">Trang chủ</NavLink>
                </li>
                <li>
                    <NavLink to="/team">CFD Team</NavLink>
                </li>
                <li>
                    <NavLink to="/khoa-hoc">Khóa Học</NavLink>
                </li>
                <li>
                    <NavLink to="/du-an">Dự Án</NavLink>
                </li>
                <li>
                    <NavLink to="!#">Liên hệ</NavLink>

                </li>
            </ul>
        </nav>
    )
}