import React, { Component } from 'react'
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import './home.css'
import {Link} from 'react-router-dom'
import{Card, Avatar,CardContent,Button, Typography} from '@mui/material'
import student  from '../../assets/student.png'
import teacher  from '../../assets/teacher.png'
import venky from '../../assets/venky.jpeg'


class AdminDashboard extends Component{


    render(){
        return(
            <div id="site-wrapper">
                <Header />
                    <div id="page-content">
                        <div className="card-section">
                            <Link to="/StudentList">
                            <Card className="card1">
                                <CardContent>
                                <Avatar alt="icon" src={student} className="avatar-image" />
                                    <Typography className="card-title">
                                        Total Number of Students
                                    </Typography>
                                    <Typography className="card-number">
                                        25
                                    </Typography>
                                </CardContent>
                            </Card>
                            </Link>
                            <Link to="/GetAllFaculty">
                            <Card className="card1">
                                
                                <CardContent>
                                <Avatar alt="icon" src={teacher} className="avatar-image" />
                                    <Typography className="card-title">
                                        Total Number of Faculty
                                    </Typography>
                                    <Typography className="card-number">
                                        25
                                    </Typography>
                                </CardContent>
                            </Card>
                            </Link>

                            <Link to="/GetAllUsers">
                                <Card className="card1">
                                    <CardContent>
                                    <Avatar alt="icon" src={venky} className="avatar-image" />
                                        <Typography className="card-title">
                                            Total Number of Users
                                        </Typography>
                                        <Typography className="card-number">
                                            10
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Link>
                            
                            <Link to="/AssignedFacultyList">
                                <Card className="card1">
                                    <CardContent>
                                    <Avatar alt="icon" src={venky} className="avatar-image" />
                                        <Typography className="card-title">
                                            Total Number of Assigned Faculty
                                        </Typography>
                                        <Typography className="card-number">
                                            25
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

export default AdminDashboard