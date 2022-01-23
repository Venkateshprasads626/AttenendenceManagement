import React, { Component } from 'react'
import Header4 from '../../Components/Header4';
import Footer from '../../Components/Footer'
import {Button} from '@mui/material'
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';

import venky from '../../assets/venky.jpeg'



class FacultyLogin extends Component{
    constructor(props){
        super(props)

        this.state = {
            email:'',
            password:''
        }
    }
    
    handlerEmailChange = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    handlerPasswordChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleSubmit = event => {
        alert(`${this.state.email} ${this.state.password}`)
        let data=this.state
        console.log(data)
        event.preventDefault()
        this.props.history.push('/AdminDashboard')
    }

    render(){
        return(
            <div id="site-wrapper">
                <Header4 />
                    <div id="page-content">
                    <div className="paper">
                        <Avatar sx={{ m:'auto',bgcolor:'primary.main', marginTop:'50px'}}
                            alt="Remy Sharp" src={venky} 
                        >
                        </Avatar>
                        <Typography sx={{fontSize:'20px'}}>
                            Sign in
                        </Typography>
                        <form onSubmit={this.handleSubmit} >
                        <TextField
                            margin="normal"
                            type="email"
                            label="Email"
                            fullWidth
                            required
                            value={this.state.email}
                            onChange={this.handlerEmailChange}
                        />

                        <TextField type="password" margin="normal" 
                            fullWidth name="password" label="Password"  
                            id="password"
                            required
                            value={this.state.password}
                            onChange={this.handlerPasswordChange}
                        />
                        <Button type="submit" variant="contained">Submit</Button>
                        </form>
                        
                    </div>      
                    </div>
                
                <Footer />
            </div>
        );
    }
}


export default FacultyLogin