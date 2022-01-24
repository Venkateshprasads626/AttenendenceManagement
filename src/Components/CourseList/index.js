import React, { useEffect, useState } from 'react'
import Header3 from '../../Components/Header3'
import Footer from '../../Components/Footer'
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper,Button, Search,Card} from '@mui/material'
import PersonAdd from'@mui/icons-material/PersonAdd';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import AddCourse from '../AddCourse';
import UpdateCourse from '../UpdateCourse'



const CourseList = () => {
    
    const [course, setCourse] = useState([]);
    useEffect(()=>{
        getCourses();
    },[deleteCourse])



    function getCourses(){
        fetch("http://localhost:8080/api/getCourse").then((result)=>{
            result.json().then((resp)=>{
                setCourse(resp)
            })
        })
    }


    function deleteCourse(id){
        fetch(`http://localhost:8080/api/deleteCourse/${id}`,{
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
            <Header3 />
                <div id="page-content">
                <Card sx={{padding: '10px',width:'100%',margin:'0 auto'}}>
                    <Button onClick={handleClickOpen} variant="outlined" color="secondary" className="add-btn"  startIcon={<PersonAdd />}>
                        New Course
                    </Button>
                </Card> 
                <Dialog className="dialog-box"
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        Add New Course
                    </DialogTitle>
                    <DialogContent>
                        <AddCourse />
                    </DialogContent>
                </Dialog>       
                <TableContainer component={Paper} style={{marginTop:'100px'}} className="table-container1">
                        <Table className="material-table"aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Id</TableCell>
                                    <TableCell align="center">Course Name</TableCell>
                                    <TableCell align="center">Description</TableCell>
                                    <TableCell align="center">Actions</TableCell>
                                </TableRow>
                            </TableHead>
                                {
                                    course.map((course, indx) => {
                                        return(
                                            <TableBody key={indx}>
                                                <TableRow>
                                                    <TableCell component="th" scope="row">{course.id}</TableCell>
                                                    <TableCell align='center'>{course.name}</TableCell>
                                                    <TableCell align="center">{course.description}</TableCell>
                                                    <TableCell align="center">
                                                        <Button  size="small" variant="contained" color="error" onClick={()=>deleteCourse(course.id)}>Delete</Button>
                                                        <Button  size="small" variant="contained" className="action-btn" onClick={handleClickOpen1}>Update</Button>
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
                        Update User
                    </DialogTitle>
                    <DialogContent>
                        <UpdateCourse />
                    </DialogContent>
                </Dialog>
                
                
                </div>
            <Footer />
        </div>
    )
    }

export default CourseList