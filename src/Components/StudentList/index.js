import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper,Button, Search,Card} from '@mui/material'
import PersonAdd from'@mui/icons-material/PersonAdd';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddStudent from '../AddStudent'
import './studentlist.css'
import UpdateStudent from '../UpdateStudent';


const StudentList = () => {
    
    const [student, setStudent] = useState([]);
    useEffect(()=>{
        getStudents();
    },[deleteStudent])



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
    const[open1, setOpen1] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleClickOpen1 = () => {
        setOpen1(true);
    };
    const handleClose1 = () => {
        setOpen1(false);
    };
    
    


    return (
        <div id="site-wrapper">
            <Header />
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
                                    <TableCell align="center">Mobile No</TableCell>
                                    <TableCell align="center">Course Name</TableCell>
                                    <TableCell align="center">Subject Name</TableCell>
                                    <TableCell align="center">Semester</TableCell>
                                    <TableCell align="center">Email</TableCell>
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
                                                    <TableCell align="center">{student.mobileNo}</TableCell>
                                                   
                                                    <TableCell align="center">{student.courseName}</TableCell>
                                                   
                                                    <TableCell align="center">{student.subjectName}</TableCell>
                                                    <TableCell align="center">{student.semester}</TableCell>
                                                    <TableCell align="center">{student.emailId}</TableCell>
                                                  
                                                    <TableCell align="center">{student.fatherMobileNo}</TableCell>
                                                    <TableCell align="center">
                                                        <Button className="delete-btn" variant="contained" color="error" onClick={()=>deleteStudent(student.id)}  startIcon={<DeleteIcon className="delete-icon1"/>} style={{padding:'2px'}}></Button>
                                                        <Button  className="edit-btn" size="small" variant="contained" className="action-btn" startIcon={<EditIcon className="edit-icon1"/>} style={{padding:'2px'}}onClick={handleClickOpen1}></Button>
                                                    </TableCell> 

                                                </TableRow>
                                            </TableBody>
                                        )
                                    })
                                }


                        </Table>
                </TableContainer>
                <Dialog className="dialog-box"
                    open={open1}
                    onClose={handleClose1}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        Update Student Record
                    </DialogTitle>
                    <DialogContent>
                        <UpdateStudent />
                    </DialogContent>
                </Dialog>
                
                </div>
            <Footer />
        </div>
    )
    }

export default StudentList