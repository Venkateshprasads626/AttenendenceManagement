import React, {Component} from 'react'
import {AppBar, Typography,Toolbar,Button, Container} from '@mui/material'
import {Link} from 'react-router-dom'

class Header4 extends Component{
    render(){
        return(
            <Container>
                <AppBar className="haeader1">
                    <Toolbar>
                        <Typography variant='h6' style={{ flexGrow: 1, textAlign:'start' }}>
                            
                        </Typography>
                        <Link to="/">
                            <Button color='inherit'>Home</Button>
                        </Link>
                        
                        <Link to="/AdminLogin">
                            <Button color='inherit'>
                                Admin
                            </Button>
                        </Link>
                        <Link to="/FacultyLogin">
                            <Button color='inherit'>
                                Faculty
                            </Button>
                        </Link>
                    </Toolbar>
                </AppBar>
            </Container>
        );
    }
}


export default Header4