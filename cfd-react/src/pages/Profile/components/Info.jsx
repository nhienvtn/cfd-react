import React, { useState } from 'react'

export function Info() {
    const [form, setForm] = useState({
        name: '',
        phone: '',
        fb: '',
        skype: ''
    })
    function handleChange(e) {
        const value = e.target.value
        const name = e.target.name
        setForm({
            ...form,
            [name]: value
        })
    }
    function handleClick() {
        console.log(form)
    }

    return (
        <>
            <div className="tab1" >
                <label>
                    <p>Họ và tên<span>*</span></p>
                    <input
                        name='name'
                        value={form.name}
                        onChange={handleChange}
                        type="text" placeholder="Nguyễn Văn A" />
                </label>
                <label>
                    <p>Số điện thoại<span>*</span></p>
                    <input type="text" name='phone' onChange={handleChange} value={form.phone} placeholder="0949******" />
                </label>
                <label>
                    <p>Email<span>*</span></p>
                    <input defaultValue="vuong.dang@dna.vn" disabled type="text" />
                </label>
                <label>
                    <p>Facebook<span>*</span></p>
                    <input value={form.fb} name='fb' onChange={handleChange} type="text" placeholder="Facebook url" />
                </label>
                <label>
                    <p>Skype<span>*</span></p>
                    <input
                        name='skype'
                        value={form.skype}
                        onChange={handleChange} type="text" placeholder="Skype url" />
                </label>
                <div onClick={handleClick} className="btn main rect">LƯU LẠI</div>
            </div>
        </>
    )
}
