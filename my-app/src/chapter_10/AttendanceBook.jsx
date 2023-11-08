import React from "react";

const students = [
    {
        id: 1,
        name: "현수",
    },
    {
        id: 2,
        name: "세훈",
    },
    {
        id: 3,
        name: "인제",
    },
    {
        id: 4,
        name: "Jeff",
    },
];

function AttendanceBook(props){
    return (
        <ul>
            {students.map((student) => {
                return <li key={`student-id-${student.id}`}>{student.name}</li>;
            })}
        </ul>
    );
}

export default AttendanceBook;