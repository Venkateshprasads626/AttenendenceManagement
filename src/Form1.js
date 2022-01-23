import React, { Component } from 'react'
import { Card, TextField, Typography,Button} from '@mui/material'



class Form1 extends Component{

    constructor(props){
        super(props)
        this.state = {
            firstName:'',
            lastName:''
        }
    }

    render(){
        return(
            <div>   
                <Card sx={{width:'80%',margin:'0 auto',height:'500px'}}>
                    <Typography>
                        Add User
                    </Typography>
                    <form>
                        <TextField
                            label="First Name"
                            placeholder="Enter Your Name"
                            value={this.state.firstName}
                            onChange={this.changeHandler}
                        />
                         <TextField
                            label="Last Name    "
                            placeholder="Enter Your Name"
                            value={this.state.lastName}
                            onChange={this.changeHandler}
                        />
                        <Button variant="outlined" onClick={this.saveOrUpdateEmployee}>Add User</Button>


                    </form>
                </Card>
            </div>
        );
    }
}


export default Form1

