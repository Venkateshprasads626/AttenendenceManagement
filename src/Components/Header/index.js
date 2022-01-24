import React, {Component} from 'react'
import {AppBar, Typography,Toolbar,Button, Container} from '@mui/material'
import {Link} from 'react-router-dom'
import Logo from '../../assets/Logo.jpg'
import './header.css'

class Header extends Component{
    render(){
        return(
            <Container>
                <AppBar className="haeader1">
                    <Toolbar>
                        <Typography variant='h6' style={{ flexGrow: 1, textAlign:'start',color:"#ff355e" }}>
                            Attendence Management
                        </Typography>
                        <Link to="/AdminDashboard">
                            <Button color='inherit' variant='contained' style={{backgroundColor:"#ff355e",borderRadius:"15px"}}>Dashboard</Button>
                        </Link>
                        
                        <Link to="/">
                            <Button color='inherit' variant='contained' style={{backgroundColor:"#ff355e",borderRadius:"15px"}}>
                                Logout
                            </Button>
                        </Link>
                    </Toolbar>
                </AppBar>
            </Container>
        );
    }
}


export default Header