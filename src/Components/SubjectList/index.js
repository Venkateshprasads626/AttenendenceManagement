import React, { useEffect, useState } from 'react'
import Header3 from '../../Components/Header3'
import Footer from '../../Components/Footer'
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper,Button, Search,Card} from '@mui/material'
import PersonAdd from'@mui/icons-material/PersonAdd';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import AddSubject from '../AddSubject'



const SubjectList = () => {
    
    const [subject, setSubject] = useState([]);
    useEffect(()=>{
        getSubjects();
    },[])



    function getSubjects(){
        fetch("http://localhost:8080/api/getSubjects").then((result)=>{
            result.json().then((resp)=>{
                setSubject(resp)
            })
        })
    }


    function deleteSubject(id){
        fetch(`http://localhost:8080/api/deleteSubject/${id}`,{
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
                        New Subject
                    </Button>
                </Card> 
                <Dialog className="dialog-box"
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        Add New Subject
                    </DialogTitle>
                    <DialogContent>
                        <AddSubject />
                    </DialogContent>
                </Dialog>       
                <TableContainer component={Paper} style={{marginTop:'100px'}} className="table-container1">
                        <Table className="material-table"aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Id</TableCell>
                                    <TableCell align="center">Semester</TableCell>
                                    <TableCell align="center">Subject Name</TableCell>
                                    <TableCell align="center">Subject Code</TableCell>
                                    <TableCell align="center">Description</TableCell>
                                    <TableCell align="center">Course Id</TableCell>
                                    <TableCell align="center">Actions</TableCell>
                                </TableRow>
                            </TableHead>
                                {
                                    subject.map((subject, indx) => {
                                        return(
                                            <TableBody key={indx}>
                                                <TableRow>
                                                    <TableCell component="th" scope="row">{subject.id}</TableCell>
                                                    <TableCell align='center'>{subject.semester}</TableCell>
                                                    <TableCell align="center">{subject.subjectName}</TableCell>
                                                    <TableCell align="center">{subject.subjectCode}</TableCell>
                                                    <TableCell align="center">{subject.description}</TableCell>
                                                    <TableCell align="center">{subject.course.id}</TableCell>
                                                    <TableCell align="center">
                                                        <Button  size="small" variant="contained" color="error" onClick={()=>deleteSubject(subject.id)}>Delete</Button>
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

export default SubjectList