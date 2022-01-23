import React, { Component } from 'react'
import Footer from '../../Components/Footer';
import Header3 from '../../Components/Header3';
import {Link} from 'react-router-dom'
import{Card, Avatar,CardContent,Button, Typography} from '@mui/material'
import student  from '../../assets/student.png'
import teacher  from '../../assets/teacher.png'
import venky from '../../assets/venky.jpeg'


class FacultyDashboard extends Component{

    render(){
        return(
            <div id="site-wrapper">
                <Header3 />
                    <div id="page-content">
                        <Typography>
                            Faculty DashBoard
                        </Typography>
                        <div className="card-section">
                            <Link to="/StudentList2">
                                <Card className="card1">
                                    <CardContent>
                                    <Avatar alt="icon" src={student} className="avatar-image" />
                                        <Typography className="card-title">
                                            Total Number of Students
                                        </Typography>
                                        <Typography className="card-number">
                                            02
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Link>

                            <Link to="/CourseList">
                                <Card className="card1">
                                    <CardContent>
                                    <Avatar alt="icon" src={teacher} className="avatar-image" />
                                        <Typography className="card-title">
                                            Total Number of Course
                                        </Typography>
                                        <Typography className="card-number">
                                            25
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Link>
                            
                           

                            <Link to="/SubjectList">
                                <Card className="card1">
                                    <CardContent>
                                    <Avatar alt="icon" src={venky} className="avatar-image" />
                                        <Typography className="card-title">
                                            Total Number of Subjects
                                        </Typography>
                                        <Typography className="card-number">
                                            10
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Link>
                            
                            <Link to="/AttendenceList">
                                <Card className="card1">
                                    <CardContent>
                                    <Avatar alt="icon" src={venky} className="avatar-image" />
                                        <Typography className="card-title">
                                            Add Attendence
                                        </Typography>
                                        <Typography className="card-number">
                                            25
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Link>
                            <Link to="/AttendenceList2">
                                <Card className="card1">
                                    <CardContent>
                                    <Avatar alt="icon" src={venky} className="avatar-image" />
                                        <Typography className="card-title">
                                            Attendence Below 75%
                                        </Typography>
                                        <Typography className="card-number">
                                            
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Link>
                           
                        </div>
                    </div>
                <Footer/>
            </div>
        );
    }
}

export default FacultyDashboard