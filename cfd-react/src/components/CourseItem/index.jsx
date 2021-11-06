import React from 'react'
import { useState } from 'react'
export default function CourseItem({ courseName, name }) {
    const [state, setState] = useState({
        name1: "nhien",
        count: 0
    })
    function up() {
        setState({
            name1: 'nhien',
            count: state.count + 1
        })
    }
    return (
        <div className="col-md-4 course">
            <div className="wrap">
                <a className="cover" href="#">
                    <img src="img/img1.png" alt="" />
                </a>
                <div className="info">
                    <a className="name" href="#">
                        {state.name1} {state.count}
                    </a>
                    <p className="des">
                        One of the best corporate fashion brands in Sydney
                    </p>
                </div>
                <div className="bottom">
                    <div className="teacher">
                        <div className="avatar">
                            <img src="img/avt.png" alt="" />
                        </div>
                        <div className="name">{name}</div>
                    </div>
                    <div className="register-btn" onClick={up}>Đăng Ký</div>
                </div>
            </div>
        </div>
    )
}
