import { useState } from "react"

export default function Cooperate() {
    const [form, setForm] = useState({
        name: '',

    })
    function handleChange(e) {
        const name = e.target.name
        const value = e.target.value
        setForm({
            ...form,
            [name]: value
        })

    }

    const [error, setError] = useState({})
    function submitForm() {
        let eObject = {};
        const regexEmail = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/
        const regexPhone = /(84|0[3|5|7|8|9])+([0-9]{8})\b/
        if (!form.name) {
            eObject.name = "điền tên"
        }
        if (!form.email) {
            eObject.email = "điền email"
        } else if (!regexEmail.test(form.email)) {
            eObject.email = "sai email"

        }
        if (!form.subject) {
            eObject.subject = "điền tiêu đè"
        }
        if (!form.content) {
            eObject.content = "điền nội dung"
        }
        if (!form.phone) {
            eObject.phone = "điền sdt"
        } else if (!regexPhone.test(form.phone)) {
            eObject.phone = "sai sdt"
        }
        setError(eObject)
        if (Object.keys(eObject).length == 0) {
            console.log(form)
        }
    }


    return (
        <main className="register-course" id="main">
            <section className="section-1 wrap container">
                {/* <div class="main-sub-title">liên hệ</div> */}
                <h2 className="main-title">HỢP TÁC CÙNG CFD</h2>
                <p className="top-des">
                    Đừng ngần ngại liên hệ với <strong>CFD</strong> để cùng nhau tạo ra những sản phẩm giá trị, cũng như
                    việc hợp tác với các đối tác tuyển dụng và công ty trong và ngoài nước.
                </p>
                <div className="form">
                    <label>
                        <p>Họ và tên<span>*</span></p>
                        <input onChange={handleChange} name='name' value={form.name} type="text" placeholder="Họ và tên bạn" />
                        {
                            error.name && <p className="text"> {error.name} </p>
                        }
                    </label>
                    <label>
                        <p>Số điện thoại</p>
                        <input name='phone' value={form.phone} onChange={handleChange} type="text" placeholder="Số điện thoại" />
                        {
                            error.phone && <p className="text"> {error.phone} </p>
                        }
                    </label>
                    <label>
                        <p>Email<span>*</span></p>
                        <input name='email' onChange={handleChange} value={form.email} type="text" placeholder="Email của bạn" />
                        {
                            error.email && <p className="text"> {error.email} </p>
                        }
                    </label>
                    <label>
                        <p>Website</p>
                        <input type="text" placeholder="Đường dẫn website http://" />
                    </label>
                    <label>
                        <p>Tiêu đề<span>*</span></p>
                        <input name='subject' onChange={handleChange} value={form.subject} type="text" placeholder="Tiêu đề liên hệ" />
                        {
                            error.subject && <p className="text"> {error.subject} </p>
                        }
                    </label>
                    <label>
                        <p>Nội dung<span>*</span></p>
                        <textarea name='content' onChange={handleChange} value={form.content} id cols={30} rows={10} defaultValue={""} />
                        {
                            error.content && <p className="text"> {error.content} </p>
                        }
                    </label>
                    <div onClick={submitForm} className="btn main rect">đăng ký</div>
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