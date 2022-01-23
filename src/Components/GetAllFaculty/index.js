import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper,Button, Search,Card} from '@mui/material'

import './getallfaculty.css'
import PersonAdd from'@mui/icons-material/PersonAdd';
import { Dialog, DialogContent, DialogTitle, DialogContentText } from '@mui/material';
import AddUser from '../../Components/AddUser';




const baseURL = `http://localhost:8080/api/getUserByroleId`;




const GetAllFaculty = () => {
    
    const [user, setUser] = useState([]);
    useEffect( () => {
        axios.get(baseURL).then( response => {
        setUser(response.data);
        console.log(response.data);
        })
    }, []);

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
                <Card sx={{padding: '10px',width:'93.4%',margin:'0 auto'}}>
                    <Button onClick={handleClickOpen} variant="outlined" color="secondary" className="add-btn"  startIcon={<PersonAdd />}>
                        New Faculty
                    </Button>
                </Card> 
                <Dialog className="dialog-box"
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        Add New User
                    </DialogTitle>
                    <DialogContent>
                        <AddUser />
                    </DialogContent>
                </Dialog>       
                <TableContainer component={Paper} style={{marginTop:'100px'}} className="table-container">
                        <Table className="material-table"aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Id</TableCell>
                                    <TableCell align="center">First Name</TableCell>
                                    <TableCell align="center">Last Name</TableCell>
                                    <TableCell align="center">Date Of Birth</TableCell>
                                    <TableCell align="center">Gender</TableCell>
                                    <TableCell align="center">Mobile No</TableCell>
                                    <TableCell align="center">Login Id</TableCell>
                                    <TableCell align="center">Password</TableCell>
                                    <TableCell align="center">Role</TableCell>
                                    <TableCell align="center">Action</TableCell>
                                </TableRow>
                            </TableHead>
                                {
                                    user.map((user, indx) => {
                                        return(
                                            <TableBody key={indx}>
                                                <TableRow>
                                                    <TableCell component="th" scope="row">{user.id}</TableCell>
                                                    <TableCell align="center">{user.firstName}</TableCell>
                                                    <TableCell align="center">{user.lastName}</TableCell>
                                                    <TableCell align="center">{user.dob}</TableCell>
                                                    <TableCell align="center">{user.gender}</TableCell>
                                                    <TableCell align="center">{user.mobileNo}</TableCell>
                                                    <TableCell align="center">{user.login}</TableCell>
                                                    <TableCell align="center">{user.password}</TableCell>
                                                    <TableCell align="center">{user.roleId}</TableCell>
                                                    <TableCell align="center">
                                                        <Button  size="small" variant="contained" color="error">Delete</Button>
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

export default GetAllFaculty