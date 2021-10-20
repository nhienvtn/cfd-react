import CourseList from "./components/CourseList";

export default function Course() {
    return (
        <main className="homepage" id="main">
            <CourseList
                title="KHÓA HỌC CFD"
                description="The readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it
            has a more-or-less normal"

                main="ONLINE" />
            <CourseList
                main="OFFLINE" />
        </main>
    )
}