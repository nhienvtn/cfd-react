import React, { useState } from 'react'
export default function RegisterForm() {
    const [form, setForm] = useState({
        name: "",
        phone: '',
        email: '',
        url: '',
        text: ''
    });

    const onFormChange = (e) => {
        let { name, value } = e.target
        setForm({
            ...form,
            [name]: value,
        })
    }

    const [error, setError] = useState({})
    const onSubmitForm = (e) => {
        let errorObject = {}
        let regexEmail = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/
        if (!form.name) {
            errorObject.name = "điền tên zô đi"
        }
        if (!form.phone) {
            errorObject.phone = "điền sđt zô đi"
        }
        if (!form.url) {
            errorObject.url = "điền link zô đi"
        }
        if (!form.text) {
            errorObject.text = "điền sđt zô đi"
        }
        if (!form.email) {
            errorObject.email = "điền email nữa"
        } else {
            if (!regexEmail.test(form.email)) {
                errorObject.email = "email sai rồi"
            }
        }
        setError(errorObject);
        console.log(errorObject)
        if (Object.keys(errorObject).length === 0) {
            console.log('form...', form)
        }


        // console.log(form);
    }

    return (
        <>
            <div className="form">
                <label>
                    <p>Họ và tên<span>*</span></p>
                    <input
                        onChange={onFormChange}
                        value={form.name} type="text"
                        name='name'
                        placeholder="Họ và tên bạn" />
                    <p className="text">{error.name && error.name}</p>

                </label>
                <label>
                    <p>Số điện thoại<span>*</span></p>
                    <input onChange={onFormChange} value={form.phone} type="text" name='phone' placeholder="Số điện thoại" />
                    <p className="text">{error.phone && error.phone}</p>
                </label>
                <label>
                    <p>Email<span>*</span></p>
                    <input onChange={onFormChange} value={form.email} type="text" name='email' placeholder="Email của bạn" />
                    <p className="text">{error.email && error.email}</p>
                </label>
                <label>
                    <p>URL Facebook<span>*</span></p>
                    <input onChange={onFormChange} value={form.url} type="text"
                        name='url' placeholder="https://facebook.com" />
                </label>
                <label className="disable">
                    <p>Sử dụng COIN</p>
                    <div className="checkcontainer">
                        Hiện có <strong>300 COIN</strong>
                        {/* Giảm giá còn <span><strong>5.800.000 VND</strong>, còn lại 100 COIN</span> */}
                        {/* Cần ít nhất 200 COIN để giảm giá */}
                        <input

                            type="checkbox" defaultChecked="checked" />
                        <span className="checkmark" />
                    </div>
                </label>
                <label>
                    <p>Hình thức thanh toán</p>
                    <div className="select">
                        <div className="head">Chuyển khoản</div>
                        <div className="sub">
                            <a href="#">Chuyển khoản</a>
                            <a href="#">Thanh toán tiền mặt</a>
                        </div>
                    </div>
                </label>
                <label>
                    <p>Ý kiến cá nhân</p>
                    <input
                        onChange={onFormChange}
                        value={form.text} type="text"
                        name='text'
                        type="text" placeholder="Mong muốn cá nhân và lịch bạn có thể học." />
                </label>
                <div onClick={onSubmitForm} className="btn main rect" >đăng ký</div>
            </div>
        </>
    )
}
