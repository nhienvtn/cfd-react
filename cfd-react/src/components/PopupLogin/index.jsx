import React from 'react';
import ReactDOM from 'react-dom';
import { useContext, useState } from "react";
import {
    Context
} from "../../App";

export default function PopupLogin() {
    const { popupLogin, setPopupLogin } = useContext(Context)
    console.log(popupLogin)
    function offLogin() {
        setPopupLogin(false)
    }
    const [form, setForm] = useState({
        account: "",
        password: ''
    })

    function changeForm(e) {
        const name = e.target.name
        const value = e.target.value
        setForm({
            ...form,
            [name]: value
        })
    }
    const [error, setError] = useState({})
    function submitForm() {
        const eObj = {}
        const regexEmail = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/
        const regexPhone = /(84|0[3|5|7|8|9])+([0-9]{8})\b/
        if (!form.account) {
            eObj.account = "Trường này không được để trống"
        } else if ((!regexEmail.test(form.account))) {
            eObj.account = "Email không hợp lệ"
        }

        if (!form.password) {
            eObj.password = "Password không được để trống"
        }
        setError(eObj)
        if (Object.keys(eObj).length == 0) {
            console.log(form)
        }
    }

    return ReactDOM.createPortal(

        <div className="popup-form popup-login" style={{ display: `${popupLogin ? "flex" : "none"}` }}>
            <div className="wrap">
                {/* login-form */}
                <div className="ct_login" style={{ display: 'block' }}>
                    <h2 className="title" >Đăng nhập</h2>
                    <input type="text" name='account' value={form.account} onChange={changeForm} placeholder="Email " />
                    {
                        error.account && <p className='errorText'> {error.account}</p>
                    }
                    <input type="password" name='password' value={form.password} onChange={changeForm} placeholder="Mật khẩu" />
                    {
                        error.password && <p className='errorText'> {error.password}</p>
                    }
                    <div className="remember">
                        <label className="btn-remember">
                            <div>
                                <input type="checkbox" />
                            </div>
                            <p>Nhớ mật khẩu</p>
                        </label>
                        <a href="#" className="forget">Quên mật khẩu?</a>
                    </div>
                    <div className="btn rect main btn-login" onClick={submitForm}>đăng nhập</div>
                    <div className="text-register" style={{}}>
                        <strong>hoặc đăng ký bằng</strong>
                    </div>
                    <div>
                        <div className="btn btn-icon rect white btn-google">
                            <img src="img/google.svg" alt />
                            Google
                        </div>
                    </div>
                    <div className="close" onClick={offLogin}>
                        <img src="img/close-icon.png" alt />
                    </div>
                </div>
                {/* email form */}

            </div>
        </div>, document.body

    )
}
