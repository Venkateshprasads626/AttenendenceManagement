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


    const[firstNameErr, setFirstNameErr]=useState('')
    const[lastNameErr, setLastNameErr]=useState('')
    const[loginErr,setLoginErr]=useState('')
    const[passwordErr,setPasswordErr]=useState('')
    

   
   
    

    const handleSubmit=(e)=>{
        e.preventDefault()
        const isValid = formValidation();
        if(isValid){
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
        
    }

    const formValidation = () =>{
        const firstNameErr = {};
        const lastNameErr = {};
        const loginErr = {};
        const passwordErr = {};
        const confirmPassword = {};
     
        let isValid = true;

        if(firstName.length === 0){
            firstNameErr.errormsg = "First Name required";
            isValid = false;
        }

        if(lastName.length === 0){
            lastNameErr.errormsg = "Last Name required";
            isValid = false;
        }

        if(lastName.trim().length >10){
            lastNameErr.errormsg =  "Last Name is too long"
            isValid = false;
        }

        if(!login.includes('@')) {
            loginErr.errormsg = "invalid email";
        }

        if(password.trim().length < 5){
            passwordErr.errormsg = "Password Too short"
            isValid = false;
        }

        
     

        setFirstNameErr(firstNameErr);
        setLastNameErr(lastNameErr);
        setLoginErr(loginErr);
        setPasswordErr(passwordErr);
       
        return isValid;

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
                {Object.keys(firstNameErr).map((key)=>{
                    return <div style={{color:'red'}}>{firstNameErr[key]}</div>
                })}
                <TextField type="text" margin="normal" 
                    fullWidth name="password" label="Last Name"  
                    placeholder='Enter Your Last Name'
                    id="firstname" 
                    value={lastName}
                    onChange={(e)=>setLastName(e.target.value)}
                />
                {Object.keys(lastNameErr).map((key)=>{
                    return <div style={{color:'red'}}>{lastNameErr[key]}</div>
                })}
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
                    required={true}
                    value={dob}
                    onChange={(e)=>setDob(e.target.value)}
                />
               
               <TextField type="text" margin="normal" 
                    fullWidth name="gender" label="Gender"  
                    id="gender" 
                    value={gender}
                    onChange={(e)=>setGender(e.target.value)}
                />
               
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
                 {Object.keys(loginErr).map((key)=>{
                    return <div style={{color:'red'}}>{loginErr[key]}</div>
                })}
               
                <TextField type="password" margin="normal" 
                    fullWidth name="password" label="Password"  
                    id="password" 
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />

                {Object.keys(passwordErr).map((key)=>{
                    return <div style={{color:'red'}}>{passwordErr[key]}</div>
                })}
              

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