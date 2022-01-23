import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Header3 from '../../Components/Header3'
import Footer from '../../Components/Footer'
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper,Button, Search,Card} from '@mui/material'
import PersonAdd from'@mui/icons-material/PersonAdd';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import AddStudent from '../AddStudent'
import './studentlist.css'


const StudentList = () => {
    
    const [student, setStudent] = useState([]);
    useEffect(()=>{
        getStudents();
    },[])



    function getStudents(){
        fetch("http://localhost:8080/api/getStudents").then((result)=>{
            result.json().then((resp)=>{
                setStudent(resp)
            })
        })
    }


    function deleteStudent(id){
        fetch(`http://localhost:8080/api/deleteStudent/${id}`,{
            method:'DELETE'
        }).then((result)=>{
            result.json().then((resp)=>{
                console.warn(resp)
            })
        })
    }

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    
    


    return (
        <div id="site-wrapper">
            <Header3 />
                <div id="page-content">
                <Card sx={{padding: '10px',width:'100%',margin:'0 auto'}}>
                    <Button onClick={handleClickOpen} variant="outlined" color="secondary" className="add-btn"  startIcon={<PersonAdd />}>
                        New Student
                    </Button>
                </Card> 
                <Dialog className="dialog-box"
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        Add New Student
                    </DialogTitle>
                    <DialogContent>
                        <AddStudent />
                    </DialogContent>
                </Dialog>       
                <TableContainer component={Paper} style={{marginTop:'100px'}} className="table-container1">
                        <Table className="material-table"aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Id</TableCell>
                                    <TableCell align="center">Roll No</TableCell>
                                    <TableCell align="center">First Name</TableCell>
                                    <TableCell align="center">Last Name</TableCell>
                                    <TableCell align="center">DOB</TableCell>
                                    <TableCell align="center">Gender</TableCell>
                                    <TableCell align="center">Mobile No</TableCell>
                                    <TableCell align="center">Coure ID</TableCell>
                                    <TableCell align="center">Course Name</TableCell>
                                    <TableCell align="center">Subject Id</TableCell>
                                    <TableCell align="center">Subject Name</TableCell>
                                    <TableCell align="center">Semester</TableCell>
                                    <TableCell align="center">Email</TableCell>
                                    <TableCell align="center">Father Email</TableCell>
                                    <TableCell align="center">Father MobileNo</TableCell>
                                    <TableCell align="center">Actions</TableCell>
                                </TableRow>
                            </TableHead>
                                {
                                    student.map((student, indx) => {
                                        return(
                                            <TableBody key={indx}>
                                                <TableRow>
                                                    <TableCell component="th" scope="row">{student.id}</TableCell>
                                                    <TableCell align='center'>{student.rollNo}</TableCell>
                                                    <TableCell align="center">{student.firstName}</TableCell>
                                                    <TableCell align="center">{student.lastName}</TableCell>
                                                    <TableCell align="center">{student.dob}</TableCell>
                                                    <TableCell align="center">{student.gender}</TableCell>
                                                    <TableCell align="center">{student.mobileNo}</TableCell>
                                                    <TableCell align="center">{student.courseId}</TableCell>
                                                    <TableCell align="center">{student.courseName}</TableCell>
                                                    <TableCell align="center">{student.subjectId}</TableCell>
                                                    <TableCell align="center">{student.subjectName}</TableCell>
                                                    <TableCell align="center">{student.semester}</TableCell>
                                                    <TableCell align="center">{student.emailId}</TableCell>
                                                    <TableCell align="center">{student.fatherEmailId}</TableCell>
                                                    <TableCell align="center">{student.fatherMobileNo}</TableCell>
                                                    <TableCell align="center">
                                                        <Button  size="small" variant="contained" color="error" onClick={()=>deleteStudent(student.id)}>Delete</Button>
                                                        <Button  size="small" variant="contained" className="action-btn">Update</Button>
                                                    </TableCell>

                                                </TableRow>
                                            </TableBody>
                                        )
                                    })
                                }


                        </Table>
                </TableContainer>
                
                
                </div>
            <Footer />
        </div>
    )
    }

export default StudentList