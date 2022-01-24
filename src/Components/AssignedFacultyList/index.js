import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper,Button, Search,Card} from '@mui/material'
import PersonAdd from'@mui/icons-material/PersonAdd';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import AssignFaculty from '../AssignFaculty';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';



const AssignedFacultyList = () => {
    
    const [assign_faculty, setAssign_Faculty] = useState([]);
    useEffect(()=>{
        getAssignedFaculty();
    },[deleteAssignFaculty])



    function getAssignedFaculty(){
        fetch("http://localhost:8080/api/getAssignFaculty").then((result)=>{
            result.json().then((resp)=>{
                setAssign_Faculty(resp)
            })
        })
    }


    function deleteAssignFaculty(id){
        fetch(`http://localhost:8080/api/deleteAssignFaculty/${id}`,{
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
            <Header />
                <div id="page-content">
                <Card sx={{padding: '10px',width:'100%',margin:'0 auto'}}>
                    <Button onClick={handleClickOpen} variant="outlined" color="secondary" className="add-btn"  startIcon={<PersonAdd />}>
                        Assign Faculty
                    </Button>
                </Card> 
                <Dialog className="dialog-box"
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        Assign New Faculty
                    </DialogTitle>
                    <DialogContent>
                        <AssignFaculty/>
                    </DialogContent>
                </Dialog>       
                <TableContainer component={Paper} style={{marginTop:'100px'}} className="table-container1">
                        <Table className="material-table"aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Id</TableCell>
                                    <TableCell align="center">User Name</TableCell>
                                    <TableCell align="center">Course Id</TableCell>
                                    <TableCell align="center">Course Name</TableCell>
                                    <TableCell align="center">Subject Id</TableCell>
                                    <TableCell align="center">Subject Name</TableCell>
                                    <TableCell align="center">Semester</TableCell>
                                    <TableCell align="center">Total Class</TableCell>
                                    <TableCell align="center">User Id</TableCell>
                                    <TableCell align="center">Actions</TableCell>
                                </TableRow>
                            </TableHead>
                                {
                                    assign_faculty.map((assign_faculty, indx) => {
                                        return(
                                            <TableBody key={indx}>
                                                <TableRow>
                                                    <TableCell component="th" scope="row">{assign_faculty.id}</TableCell>
                                                    <TableCell align='center'>{assign_faculty.userName}</TableCell>
                                                    <TableCell align="center">{assign_faculty.courseId}</TableCell>
                                                    <TableCell align="center">{assign_faculty.courseName}</TableCell>
                                                    <TableCell align="center">{assign_faculty.subjectId}</TableCell>
                                                    <TableCell align="center">{assign_faculty.subjectName}</TableCell>
                                                    <TableCell align="center">{assign_faculty.semester}</TableCell>
                                                    <TableCell align="center">{assign_faculty.totalClass}</TableCell>
                                                    <TableCell align="center">{assign_faculty.user.id}</TableCell>
                                                    <TableCell align="center">
                                                        <Button className="delete-btn" variant="contained" color="error" onClick={()=>deleteAssignFaculty(assign_faculty.id)}  startIcon={<DeleteIcon className="delete-icon1"/>} style={{padding:'2px'}}></Button>
                                                        <Button  className="edit-btn" size="small" variant="contained" className="action-btn" startIcon={<EditIcon className="edit-icon1"/>} style={{padding:'2px'}}></Button>
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

export default AssignedFacultyList