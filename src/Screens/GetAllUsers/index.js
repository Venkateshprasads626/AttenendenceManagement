
import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper,Button, Search,Card, TextField} from '@mui/material'
import './getallusers.css'
import PersonAdd from'@mui/icons-material/PersonAdd';
import { Dialog, DialogContent, DialogTitle, DialogContentText } from '@mui/material';
import AddUser from '../../Components/AddUser';
import UpdateUser from '../../Components/UpdateUser'


function GetAllUsers(){
    
    const [user, setUser] = useState([])
    
    useEffect(()=>{
        getUsers();
    },[deleteUser])

    function getUsers(){
        fetch("http://localhost:8080/api/getUsers").then((result)=>{
            result.json().then((resp)=>{
                setUser(resp)
            })
        })
    }

    function deleteUser(id){
        fetch(`http://localhost:8080/api/deleteUser/${id}`,{
            method:'DELETE'
        }).then((result)=>{
            result.json().then((resp)=>{
                console.warn(resp)
                getUsers();
                
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
                <Card sx={{padding: '10px',width:'93.4%',margin:'0 auto'}}>
                    <Button onClick={handleClickOpen} variant="outlined" color="secondary" className="add-btn"  startIcon={<PersonAdd />}>
                        New User
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
                                                    <TableCell align="center">{user.mobileNo}</TableCell>
                                                    <TableCell align="center">{user.login}</TableCell>
                                                    <TableCell align="center">{user.password}</TableCell>
                                                    <TableCell align="center">{user.roleId}</TableCell>
                                                    <TableCell align="center">
                                                        <Button  size="small" variant="contained" color="error" className="action-btn" onClick={()=>deleteUser(user.id)} >Delete</Button>
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
                        <UpdateUser />
                    </DialogContent>
                </Dialog>  
                
                
                </div>
            <Footer />
        </div>
    )
    }

export default GetAllUsers