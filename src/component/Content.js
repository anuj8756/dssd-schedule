import React from 'react'
import './Content.css';
import ContentHeader from '../ContentHeader'
import Card from './Card';
import TeachersList from './TeachersList';
const Content = () => {
    return (
        <div className="content">
            <ContentHeader />
            <Card />
            <TeachersList />
        </div>
    )
}

export default Content