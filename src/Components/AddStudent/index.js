import { TextField, Button, FormControl} from '@mui/material'
import { InputLabel,MenuItem,Select } from '@mui/material';
import React, { useState } from 'react'


const AddStudent = () =>{

    const[rollNo, setRollNo]=useState('')
    const[firstName, setFirstName]=useState('')
    const[lastName, setLastName]=useState('')
    const[dob,setDob]=useState('')
    const[gender,setGender]=useState('')
    const[mobileNo,setMobileNo]=useState('')
    const[courseId,setCourseId]=useState('')
    const[courseName,setCourseName]=useState('')
    const[subjectId,setSubjectId]=useState('')
    const[subjectName,setSubjectName]=useState('')
    const[semester,setSemester]=useState('')
    const[emailId,setEmailId]=useState('')
    const[fatherEmailId,setFatherEmailId]=useState('')
    const[fatherMobileNo,setFatherMobileNo]=useState('')

    
    const handleSubmit=(e)=>{
        e.preventDefault()
        const student={rollNo,firstName,lastName,dob,mobileNo,courseId,courseName,subjectId,subjectName,semester,emailId,fatherEmailId,fatherMobileNo}
        console.log(student)

        fetch("http://localhost:8080/api/addStudent",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(student)
        }).then(()=>{
            alert(`New Student added`)
        })
    }


    return(
       
        <div>
            <form className="add-student-form">
                <TextField type="number" margin="normal" 
                    fullWidth name="rollId" label="Roll No"  
                    placeholder='Enter Your Roll Number'
                    id="rollNo"
                    value={rollNo}
                    onChange={(e)=>setRollNo(e.target.value)}
                />

                <TextField type="text" margin="normal" 
                    fullWidth name="firstName" label="First Name"  
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
                <TextField type="number" margin="normal" 
                    fullWidth name="courseId" label="Course Id"  
                    id="courseId" 
                    value={courseId}
                    onChange={(e)=>setCourseId(e.target.value)}
                />

                <TextField type="text" margin="normal" 
                    fullWidth name="courseName" label="Course Name"  
                    id="courseName" 
                    value={courseName}
                    onChange={(e)=>setCourseName(e.target.value)}
                />

                <TextField type="number" margin="normal" 
                    fullWidth name="subjectId" label="Subject Id"  
                    id="subjectId" 
                    value={subjectId}
                    onChange={(e)=>setSubjectId(e.target.value)}
                />

                <TextField type="text" margin="normal" 
                    fullWidth name="subjectName" label="Subject Name"  
                    id="subjectName"
                    value={subjectName}
                    onChange={(e)=>setSubjectName(e.target.value)}
                />

                <TextField type="text" margin="normal" 
                    fullWidth name="semester" label="Semester"  
                    id="semester"
                    value={semester}
                    onChange={(e)=>setSemester(e.target.value)}
                />

                <TextField type="email" margin="normal" 
                    fullWidth name="emailId" label="Email"  
                    id="emailId"
                    value={emailId}
                    onChange={(e)=>setEmailId(e.target.value)}
                />

                <TextField type="email" margin="normal" 
                    fullWidth name="fatherEmailId" label="Father Email"  
                    id="fatherEmailId"
                    value={fatherEmailId}
                    onChange={(e)=>setFatherEmailId(e.target.value)}
                />

                <TextField type="number" margin="normal" 
                    fullWidth name="fatherMobileNo" label="Father Mobile No"  
                    id="fatherMobileNo"
                    value={fatherMobileNo}
                    onChange={(e)=>setFatherMobileNo(e.target.value)}
                />
                

                <Button type="submit" variant='contained' onClick={handleSubmit}>Submit</Button>
            </form>
           
        </div>
    )
}

export default AddStudent