import React, { useState } from 'react'

// function registerForm(props) {
//     const [values, setValues] = useState({
//         name='',
//         phone='',
//         email='',
//         url=''
//     })
//     const [errors, setErrors] = useState({})
//     const handleChange = e => {
//         setValues({
//             ...values
//             [name]: value
//         })
//     }



// }


export default function Register() {
    const [form, setForm] = useState({})
    const handleInputChange = (ev) => {
        let name = ev.currentTarget.name
        let value = ev.currentTarget.value
        setForm({
            ...form,
            [name]: value
        })
    }
    const [error, setError] = useState({})
    const submit = () => {
        let errorObject = {}
        if (!form.name) {
            errorObject.name = 'Nhập tên đê'
        }
        if (!form.phone) {
            errorObject.phone = 'Nhập phone đê'
        }
        if (!form.email) {
            errorObject.phone = 'Nhập email đê'
        }
        setError(errorObject)
    }
    return (
        <main className="register-course" id="main">
            <section>
                <div className="container">
                    <div className="wrap container">
                        <div className="main-sub-title">ĐĂNG KÝ</div>
                        <h1 className="main-title">Thực chiến front-end căn bản </h1>
                        <div className="main-info">
                            <div className="date"><strong>Khai giảng:</strong> 15/11/2020</div>
                            <div className="time"><strong>Thời lượng:</strong> 18 buổi</div>
                            <div className="time"><strong>Học phí:</strong> 6.000.000 VND</div>
                        </div>
                        <div className="form">
                            <label>
                                <p>Họ và tên<span>*</span></p>
                                <input onChange={handleInputChange} type="text" value={form.name} name='name' placeholder="Họ và tên bạn" />
                                <p className="text">{ }</p>
                            </label>
                            <label>
                                <p>Số điện thoại<span>*</span></p>
                                <input onChange={handleInputChange} type="text" value={form.phone} name='phone' placeholder="Số điện thoại" />
                                <p className="text">{ }</p>
                            </label>
                            <label>
                                <p>Email<span>*</span></p>
                                <input onChange={handleInputChange} type="text" value={form.email} name='email' placeholder="Email của bạn" />
                            </label>
                            <label>
                                <p>URL Facebook<span>*</span></p>
                                <input onChange={handleInputChange} type="text" value={form.url} name='url' placeholder="https://facebook.com" />
                            </label>
                            <label className="disable">
                                <p>Sử dụng COIN</p>
                                <div className="checkcontainer">
                                    Hiện có <strong>300 COIN</strong>
                                    {/* Giảm giá còn <span><strong>5.800.000 VND</strong>, còn lại 100 COIN</span> */}
                                    {/* Cần ít nhất 200 COIN để giảm giá */}
                                    <input type="checkbox" defaultChecked="checked" />
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
                                <input type="text" placeholder="Mong muốn cá nhân và lịch bạn có thể học." />
                            </label>
                            <div className="btn main rect" onClick={submit}>đăng ký</div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <div class="register-success">
            <div class="contain">
                <div class="main-title">đăng ký thành công</div>
                <p>
                    <strong>Chào mừng Trần Nghĩa đã trở thành thành viên mới của CFD Team.</strong> <br>
                    Cảm ơn bạn đã đăng ký khóa học tại <strong>CFD</strong>, chúng tôi sẽ chủ động liên lạc với bạn thông qua facebook
                    hoặc số điện thoại của bạn.
                </p>
            </div>
            <a href="/" class="btn main rect">về trang chủ</a>
        </div> */}
        </main>
    )
}