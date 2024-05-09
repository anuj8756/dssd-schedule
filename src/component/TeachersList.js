import React from 'react'
import './TeachersList.css';

const teachers = [
    {
        image: '/images/images1.png',
        name: 'prof deepak',
        duration: '8 hours',
        cost: "100",
    },

    {
        image: '/images/images1.png',
        name: 'prof deepak',
        duration: '8 hours',
        cost: "100",
    },

    {
        image: '/images/images1.png',
        name: 'prof deepak',
        duration: '8 hours',
        cost: "100",
    },

    {
        image: '/images/images1.png',
        name: 'prof deepak',
        duration: '8 hours',
        cost: "100",
    },
]
const TeachersList = () => {
    return (
        <div className='teacher--list'>
            <div className="list--header">
                <h2>Teachers</h2>
                <select>
                    <option value="Developer">Web Developer</option>
                    <option value="Microsoft">Microsoft Office</option>
                    <option value="Telly">Telly</option>
                </select>
            </div>
            <div className="list--container">
                {teachers.map((teacher) => (
                    <div className="list">
                        <div className="teacher--detail">
                            <img src={teacher.image} alt={teacher.name} />
                            <h2>{teacher.name}</h2>
                        </div>
                        <span>{teacher.duration}</span>
                        <span>INR {teacher.cost}/hr.</span>
                        <span className="teachers--todo">:</span>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default TeachersList;