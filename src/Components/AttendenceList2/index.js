import React, { useEffect, useState } from 'react'
import Header3 from '../../Components/Header3'
import Footer from '../../Components/Footer'
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper,Button} from '@mui/material'




const AttendenceList2 = () => {
    
    const [attendence, setAttendence] = useState([]);
    useEffect(()=>{
        getAttendences();
    },[])



    function getAttendences(){
        fetch("http://localhost:8080/api/getAttendenceBypercentage").then((result)=>{
            result.json().then((resp)=>{
                setAttendence(resp)
            })
        })
    }    

    return (
        <div id="site-wrapper">
            <Header3 />
                <div id="page-content">      
                <TableContainer component={Paper} style={{marginTop:'100px'}} className="table-container1">
                        <Table className="material-table"aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Id</TableCell>
                                    <TableCell align="center">Student Name</TableCell>
                                    <TableCell align="center">Student Id</TableCell>
                                    <TableCell align="center">Semester</TableCell>
                                    <TableCell align="center">Subject Id</TableCell>
                                    <TableCell align="center">Date</TableCell>
                                    <TableCell align="center">Total Class</TableCell>
                                    <TableCell align="center">Status</TableCell>
                                    <TableCell align="center">Total CPresent</TableCell>
                                    <TableCell align="center">Percentage</TableCell>
                                    <TableCell align="center">Coure ID</TableCell>
                                    <TableCell align="center">Course Name</TableCell>
                                </TableRow>
                            </TableHead>
                                {
                                    attendence.map((attendence, indx) => {
                                        return(
                                            <TableBody key={indx}>
                                                <TableRow>
                                                    <TableCell component="th" scope="row">{attendence.id}</TableCell>
                                                    <TableCell align='center'>{attendence.studentName}</TableCell>
                                                    <TableCell align="center">{attendence.student.id}</TableCell>
                                                    <TableCell align="center">{attendence.semester}</TableCell>
                                                    <TableCell align="center">{attendence.subjectId}</TableCell>
                                                    <TableCell align="center">{attendence.date}</TableCell>
                                                    <TableCell align="center">{attendence.totalClass}</TableCell>
                                                    <TableCell align="center">{attendence.status}</TableCell>
                                                    <TableCell align="center">{attendence.total}</TableCell>
                                                    <TableCell align="center">{attendence.percentage}</TableCell>
                                                    <TableCell align="center">{attendence.courseId}</TableCell>
                                                    <TableCell align="center">{attendence.courseName}</TableCell>
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

export default AttendenceList2