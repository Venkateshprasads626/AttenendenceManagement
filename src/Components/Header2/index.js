import React, {Component} from 'react'
import {AppBar, Typography,Toolbar,Button, Container} from '@mui/material'


class Header2 extends Component{
    render(){
        return(
            <Container>
                <AppBar className="haeader1">
                    <Toolbar>
                        <Typography variant='h6' style={{ flexGrow: 1, textAlign:'start' }}>
                            Attendence Management
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Container>
        );
    }
}


export default Header2