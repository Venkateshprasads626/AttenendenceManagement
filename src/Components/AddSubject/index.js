import { TextField, Button,TextareaAutosize } from '@mui/material'
import axios from 'axios'
import BaseUrl from '../BaseUrl';

import React, { useState } from 'react'


const AddSubject= () =>{

    const[subjectName, setSubjectName]=useState('')
    const[subjectCode, setSubjectCode]=useState('')
    const[semester, setSemester]=useState('')
    const[description, setDescription]=useState('')
   
    const[course,setCourse]=useState({});
    

    const data = {subjectName,subjectCode,semester,description,course};
    const formHandler = (e) =>{
        addSubject(data);
        console.log(data);
        e.preventDefault();
    };

    const addSubject = (data) =>{
        axios.post(`${BaseUrl}/addSubject`,data).then(
            (response) => {
                console.log(response);
                alert('Subject Added!!')
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
                    fullWidth name="subjectName" label="Subject Name"  
                    placeholder='Enter Subject Name'
                    id="subjectName"
                    value={subjectName}
                    onChange={(e)=>setSubjectName(e.target.value)}
                />
                <TextField type="text" margin="normal" 
                    fullWidth name="subjectCode" label="Subject Code"  
                    placeholder='Enter Subject Code'
                    id="subjectCode" 
                    value={subjectCode}
                    onChange={(e)=>setSubjectCode(e.target.value)}
                />

                <TextField type="text" margin="normal" 
                    fullWidth name="semester" label="Semester"  
                    placeholder='Enter Semester'
                    id="semester" 
                    value={semester}
                    onChange={(e)=>setSemester(e.target.value)}
                />
                
                <TextareaAutosize type="text" margin="normal" 
                    style={{ width: '92%',padding:'20px' }}
                    label="Description"  
                    placeholder='Desciption'
                    id="description" 
                    value={description}
                    onChange={(e)=>setDescription(e.target.value)}
                />

                <TextField type="number" margin="normal" 
                    fullWidth  label="Course Id"  
                    onChange={(e)=>setCourse({...course,id:e.target.value})}
                />

                <Button type="submit" variant='contained'>Submit</Button>
            </form>
           
        </div>
    )
}

export default AddSubject