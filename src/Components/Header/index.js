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
                        <Typography variant='h6' style={{ flexGrow: 1, textAlign:'start' }}>
                            <img src={Logo} className="logo-image" />
                        </Typography>
                        <Link to="/AdminDashboard">
                            <Button color='inherit'>Dashboard</Button>
                        </Link>
                        
                        <Link to="/">
                            <Button color='inherit'>
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