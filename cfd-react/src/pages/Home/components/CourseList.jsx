import React from 'react'
import CourseItem from '../../../components/CourseItem'

export default function CourseList(props) {
    return (
        <section className="section-courseoffline">
            <div className="container">
                {
                    props.description ? (
                        <p className="top-des">
                            {props.description}
                        </p>
                    ) : null
                }
                <div className="textbox">
                    <h2 className="main-title">{props.name}</h2>
                </div>
                <div className="list row">
                    <CourseItem courseName='React' name='Tran Nghia' />
                    <CourseItem courseName='Responsive' name='Nhien' />
                    <CourseItem courseName='Angular' name='An' />

                </div>
            </div>
        </section>
    )
}
