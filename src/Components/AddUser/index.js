import { TextField, Button, RadioGroup,FormControlLabel,Radio,FormLabel, FormControl} from '@mui/material'
import { InputLabel,MenuItem,Select } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'
import './adduser.css'

const AddUser = () =>{

    const[firstName, setFirstName]=useState('')
    const[lastName, setLastName]=useState('')
    const[dob,setDob]=useState('')
    const[gender,setGender]=useState('')
    const[mobileNo,setMobileNo]=useState('')
    const[login,setLogin]=useState('')
    const[password,setPassword]=useState('')
    const[confirmPassword,setConfirmPassword]=useState('')
    const[roleId,setRoleId]=useState('')

    
   
    

    const handleSubmit=(e)=>{
        e.preventDefault()
        const user={firstName,lastName,dob,mobileNo,login,password,confirmPassword,roleId}
        console.log(user)

        fetch("http://localhost:8080/api/addUser",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(user)
        }).then(()=>{
            alert(`New User added`)
        })
    }


    return(
       
        <div>
            <form className="add-user-form">
                <TextField type="text" margin="normal" 
                    fullWidth name="password" label="First Name"  
                    placeholder='Enter Your First Name'
                    id="firstname"
                    value={firstName}
                    onChange={(e)=>setFirstName(e.target.value)}
                />
                <TextField type="text" margin="normal" 
                    fullWidth name="password" label="Last Name"  
                    placeholder='Enter Your Last Name'
                    id="firstname" 
                    value={lastName}
                    onChange={(e)=>setLastName(e.target.value)}
                />
                <TextField
                    margin="normal"
                    id="date"
                    label="Date Of Birth"
                    type="date"
                    name="date"
                    inputProps={{ max: "2022-01-21" }} 
                    fullWidth
                    defaultValue="0000-00-00"
                    InputLabelProps={{
                    shrink: true,
                    }}
                    value={dob}
                    onChange={(e)=>setDob(e.target.value)}
                />
                 <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Gender"
                        value={gender}
                        onChange={(e)=>setGender(e.target.value)}
                    >
                        <MenuItem value={1}>Male</MenuItem>
                        <MenuItem value={2}>Female</MenuItem>
                        <MenuItem value={3}>Others</MenuItem>
                    </Select>
                </FormControl>
               
                <TextField type="number" margin="normal" 
                    fullWidth name="password" label="Mobile Number"  
                    id="number"
                    value={mobileNo}
                    onChange={(e)=>setMobileNo(e.target.value)}
                />
                <TextField type="email" margin="normal" 
                    fullWidth name="email" label="Login Id"  
                    id="email" 
                    value={login}
                    onChange={(e)=>setLogin(e.target.value)}
                />
                <TextField type="password" margin="normal" 
                    fullWidth name="password" label="Password"  
                    id="password" 
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />

                <TextField type="password" margin="normal" 
                    fullWidth name="password" label="Confirm Password"  
                    id="confirmpassword"
                    value={confirmPassword}
                    onChange={(e)=>setConfirmPassword(e.target.value)}
                />
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Role</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={roleId}
                        label="Role"
                        onChange={(e)=>setRoleId(e.target.value)}
                    >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                    </Select>
                </FormControl>

                <Button type="submit" variant='contained' onClick={handleSubmit}>Submit</Button>
            </form>
           
        </div>
    )
}

export default AddUser