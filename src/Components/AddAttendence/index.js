import { TextField, Button,TextareaAutosize } from '@mui/material'
import axios from 'axios'
import BaseUrl from '../BaseUrl';

import React, { useState } from 'react'


const AddAttendence= () =>{

    const[studentName, setStudentName]=useState('')
    const[subjectId, setSubjectId]=useState('')
    const[subjectName, setSubjectName]=useState('')
    const[semester, setSemester]=useState('')
    const[date, setDate]=useState('')
    const[totalClass, setTotalClass]=useState('')
    const[status, setStatus]=useState('')
    const[total, setTotal]=useState('')
    const[percentage, setPercentage]=useState('')
    const[courseId, setCourseId]=useState('')
    const[courseName, setCourseName]=useState('')
   
    const[student,setStudent]=useState({});
    

    const data = {studentName,subjectId,subjectName,semester,date,totalClass,status,total,percentage,courseId,courseName,student};
    const formHandler = (e) =>{
        addAttendence(data);
        console.log(data);
        e.preventDefault();
    };

    const addAttendence = (data) =>{
        axios.post(`${BaseUrl}/addAttendence`,data).then(
            (response) => {
                console.log(response);
                alert('Attendence Added!!')
            },
            (error) => {
                console.log(error);
                console.log("Error");            }
        )
    }

    return(
        <div>
            <form className="add-subject-form" onSubmit={formHandler}>

                <TextField type="text" margin="normal" 
                    fullWidth name="studentName" label="Student Name"  
                    placeholder='Enter Student Name'
                    id="studentName"
                    value={studentName}
                    onChange={(e)=>setStudentName(e.target.value)}
                />
                <TextField type="number" margin="normal" 
                    fullWidth  label="Student Id"  
                    onChange={(e)=>setStudent({...student,id:e.target.value})}
                />


                <TextField type="text" margin="normal" 
                    fullWidth name="semester" label="Semester"  
                    placeholder='Enter Semester'
                    id="semester" 
                    value={semester}
                    onChange={(e)=>setSemester(e.target.value)}
                />

                <TextField type="text" margin="normal" 
                    fullWidth name="subjectId" label="Subject Id"  
                    placeholder='Enter Subject Id'
                    id="subjectId" 
                    value={subjectId}
                    onChange={(e)=>setSubjectId(e.target.value)}
                />

                <TextField type="text" margin="normal" 
                    fullWidth name="subjectName" label="Subject Name"  
                    placeholder='Enter Subject Name'
                    id="subjectName" 
                    value={subjectName}
                    onChange={(e)=>setSubjectName(e.target.value)}
                />
                <TextField type="date" margin="normal"
                    fullWidth name="date" label="Select Date"
                    id="date"
                    inputProps={{ max: "2022-01-21" }} 
                    defaultValue="0000-00-00"
                    InputLabelProps={{
                    shrink: true,
                    }}
                    value={date}
                    onChange={(e)=>setDate(e.target.value)}
                />
                  <TextField type="text" margin="normal" 
                    fullWidth name="totalClass" label="Total Class"  
                    placeholder='Enter Total Class'
                    id="totalClass" 
                    value={totalClass}
                    onChange={(e)=>setTotalClass(e.target.value)}
                />
                <TextField type="text" margin="normal" 
                    fullWidth name="status" label="Status"  
                    placeholder='Enter Satus'
                    id="status" 
                    value={status}
                    onChange={(e)=>setStatus(e.target.value)}
                />

                <TextField type="text" margin="normal" 
                    fullWidth name="total" label="Total Present"  
                    id="total" 
                    value={total}
                    onChange={(e)=>setTotal(e.target.value)}
                />

                <TextField type="text" margin="normal" 
                    fullWidth name="percentage" label="Percentage"  
                    placeholder='Enter Percentage'
                    id="percentage" 
                    value={percentage}
                    onChange={(e)=>setPercentage(e.target.value)}
                />

                <TextField type="number" margin="normal" 
                    fullWidth name="courseId" label="CourseId"  
                    placeholder='Enter CourseId'
                    id="courseId" 
                    value={courseId}
                    onChange={(e)=>setCourseId(e.target.value)}
                />

                <TextField type="text" margin="normal" 
                    fullWidth name="courseName" label="Course Name"  
                    placeholder='Enter Course Name'
                    id="courseName" 
                    value={courseName}
                    onChange={(e)=>setCourseName(e.target.value)}
                />

                <Button type="submit" variant='contained'>Submit</Button>
            </form>
           
        </div>
    )
}

export default AddAttendence