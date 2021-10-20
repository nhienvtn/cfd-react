import React from 'react'

export default function CourseList(props) {
    return (
        <section className="section-1">
            <div className="container">
                <h2 className="main-title">{props.title}</h2>
                {
                    props.description ? (
                        <p className="top-des">
                            {props.description}
                        </p>
                    ) : null
                }

                <div className="textbox">
                    <h3 className="sub-title">KHÓA HỌC</h3>
                    <h2 className="main-title">{props.main}</h2>
                </div>
                <div className="list row">
                    <div className="col-md-4 course">
                        <div className="wrap">
                            <a className="cover" href="#">
                                <img src="img/img1.png" alt="" />
                            </a>
                            <div className="info">
                                <a className="name" href="#">
                                    Front-end căn bản
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
                                    <div className="name">Trần Nghĩa</div>
                                </div>
                                <div className="register-btn">Đăng Ký</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 course">
                        <div className="wrap">
                            <a href="#" className="cover">
                                <img src="img/img.png" alt="" />
                            </a>
                            <div className="info">
                                <a className="name" href="#">
                                    React JS
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
                                    <div className="name">Vương Đặng</div>
                                </div>
                                <div className="register-btn">Đăng Ký</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 course">
                        <div className="wrap">
                            <a href="#" className="cover">
                                <img src="img/img2.png" alt="" />
                            </a>
                            <div className="info">
                                <a className="name" href="#">
                                    Animation
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
                                    <div className="name">Trần Nghĩa</div>
                                </div>
                                <div className="register-btn">Đăng Ký</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 course">
                        <div className="wrap">
                            <a href="#" className="cover">
                                <img src="img/img3.png" alt="" />
                            </a>
                            <div className="info">
                                <a className="name" href="#">
                                    Scss, Grunt JS và Boostrap 4
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
                                    <div className="name">Trần Nghĩa</div>
                                </div>
                                <div className="register-btn">Đăng Ký</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 course">
                        <div className="wrap">
                            <a href="#" className="cover">
                                <img src="img/img4.png" alt="" />
                            </a>
                            <div className="info">
                                <a href="#" className="name">
                                    UX/UI Design
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
                                    <div className="name">Trần Nghĩa</div>
                                </div>
                                <div className="register-btn">Đăng Ký</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 course">
                        <div className="wrap">
                            <a href="#" className="cover">
                                <img src="img/img5.png" alt="" />
                            </a>
                            <div className="info">
                                <a className="name" href="#">
                                    Web Responsive
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
                                    <div className="name">Trần Nghĩa</div>
                                </div>
                                <a href="#" className="register-btn">Đăng Ký</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
