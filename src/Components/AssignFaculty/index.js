import { TextField, Button, RadioGroup,FormControlLabel,Radio,FormLabel, FormControl} from '@mui/material'
import axios from 'axios'
import BaseUrl from '../BaseUrl';

import React, { useState } from 'react'


const AssignFaculty = () =>{

    const[courseId, setCourseId]=useState('')
    const[userName, setUserName]=useState('')
    const[courseName,setCourseName]=useState('')
    const[subjectId,setSubjectId]=useState('')
    const[subjectName,setSubjectName]=useState('')
    const[semester,setSemester]=useState('')
    const[totalClass,setTotalClass]=useState('')
    const[user,setUser]=useState({});
    

    const data = {courseId,userName,courseName,subjectId,subjectName,semester,totalClass,user};
    const formHandler = (e) =>{
        assignFacultyDetails(data);
        console.log(data);
        e.preventDefault();
    };

    const assignFacultyDetails = (data) =>{
        axios.post(`${BaseUrl}/addAssignFaculty`,data).then(
            (response) => {
                console.log(response);
                alert('Faculty Assigned!!')
            },
            (error) => {
                console.log(error);
                console.log("Error");            }
        )
    }

    return(
        <div>
            <form className="add-user-form" onSubmit={formHandler}>

                <TextField type="text" margin="normal" 
                    fullWidth name="number" label="Course Id"  
                    placeholder='Enter Course Id'
                    id="number"
                    value={courseId}
                    onChange={(e)=>setCourseId(e.target.value)}
                />
                <TextField type="text" margin="normal" 
                    fullWidth name="userName" label="User Name"  
                    placeholder='Enter User Name'
                    id="userName" 
                    value={userName}
                    onChange={(e)=>setUserName(e.target.value)}
                />

                <TextField type="text" margin="normal" 
                    fullWidth name="courseName" label="Course Name"  
                    placeholder='Enter Course Name'
                    id="courseName" 
                    value={courseName}
                    onChange={(e)=>setCourseName(e.target.value)}
                />
                
                <TextField type="number" margin="normal" 
                    fullWidth name="number" label="Subject Id"  
                    placeholder='Enter Subject Id'
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
                    fullWidth name="text" label="Semester"  
                    id="semester" 
                    value={semester}
                    onChange={(e)=>setSemester(e.target.value)}
                />
                <TextField type="text" margin="normal" 
                    fullWidth name="text" label="Total Class"  
                    id="text" 
                    value={totalClass}
                    onChange={(e)=>setTotalClass(e.target.value)}
                />

                <TextField type="text" margin="normal" 
                    fullWidth  label="User Id"  
                    onChange={(e)=>setUser({...user,id:e.target.value})}
                />

                <Button type="submit" variant='contained'>Submit</Button>
            </form>
           
        </div>
    )
}

export default AssignFaculty