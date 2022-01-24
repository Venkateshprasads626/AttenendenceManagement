import { TextField, Button,TextareaAutosize } from '@mui/material'
import axios from 'axios'
import BaseUrl from '../BaseUrl';

import React, { useState } from 'react'


const UpdateSubject= () =>{

    const[id,setId]=useState('')
    const[subjectName, setSubjectName]=useState('')
    const[subjectCode, setSubjectCode]=useState('')
    const[semester, setSemester]=useState('')
    const[description, setDescription]=useState('')
   
    const[course,setCourse]=useState({});


    
    const[subjectNameErr, setSubjectNameErr]=useState('')
    const[subjectCodeErr, setSubjectCodeErr]=useState('')
    const[semesterErr, setSemesterErr]=useState('')
    const[descriptionErr, setDescriptionErr]=useState('')

    

    
    const formHandler = (e) =>{
        e.preventDefault();
        const isValid = formValidation();
        if(isValid){
            const data = {id,subjectName,subjectCode,semester,description,course};
            console.log(data);

            fetch("http://localhost:8080/api/updateSubject",{
                method:"PUT",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(data)
            }).then(()=>{
                alert(`Subject Updated!!`)
            })
        }
       
    };

    

    const formValidation = () =>{
        const subjectNameErr = {};
        const subjectCodeErr = {};
        const semesterErr = {};
        const descriptionErr = {};
        let isValid = true;

        if(subjectName.trim().length <=0 ){
            subjectNameErr. nameShort = "Please Fill this field";
            isValid = false;
        }

        if(subjectCode.trim().length <=0 ){
            subjectCodeErr. nameShort = "Please Fill this field";
            isValid = false;
        }

        
        if(semester.trim().length <=0 ){
            semesterErr. nameShort = "Please Fill this field";
            isValid = false;
        }

        if(description.trim().length > 20){
            descriptionErr.descriptionShort =  "Description too long"
            isValid = false;
        }


        setSubjectNameErr(subjectNameErr);
        setSubjectCodeErr(subjectCodeErr);
        setSemesterErr(semesterErr);
        setDescriptionErr(descriptionErr);
        return isValid;
    }

    return(
        <div>
            <form className="add-subject-form" onSubmit={formHandler}>

                <TextField type="number" margin="normal" 
                    fullWidth name="password" label="Subject Id"  
                    placeholder='Enter Subject Id'
                    id="id"
                    value={id}
                    onChange={(e)=>setId(e.target.value)}
                />

                <TextField type="text" margin="normal" 
                    fullWidth name="subjectName" label="Subject Name"  
                    placeholder='Enter Subject Name'
                    id="subjectName"
                    value={subjectName}
                    onChange={(e)=>setSubjectName(e.target.value)}
                />
                {Object.keys(subjectNameErr).map((key)=>{
                    return <div style={{color:'red',width:'500px'}}>{subjectNameErr[key]}</div>
                })}
                <TextField type="text" margin="normal" 
                    fullWidth name="subjectCode" label="Subject Code"  
                    placeholder='Enter Subject Code'
                    id="subjectCode" 
                    value={subjectCode}
                    onChange={(e)=>setSubjectCode(e.target.value)}
                />
                {Object.keys(subjectCodeErr).map((key)=>{
                    return <div style={{color:'red',width:'500px'}}>{subjectCodeErr[key]}</div>
                })}
                <TextField type="text" margin="normal" 
                    fullWidth name="semester" label="Semester"  
                    placeholder='Enter Semester'
                    id="semester" 
                    value={semester}
                    onChange={(e)=>setSemester(e.target.value)}
                />

                {Object.keys(semesterErr).map((key)=>{
                    return <div style={{color:'red',width:'500px'}}>{semesterErr[key]}</div>
                })}
                
                <TextareaAutosize type="text" margin="normal" 
                    style={{ width: '92%',padding:'20px' }}
                    label="Description"  
                    placeholder='Desciption'
                    id="description" 
                    value={description}
                    onChange={(e)=>setDescription(e.target.value)}
                />
                 {Object.keys(descriptionErr).map((key)=>{
                    return <div style={{color:'red',width:'500px'}}>{descriptionErr[key]}</div>
                })}

                <TextField type="number" margin="normal" 
                    fullWidth  label="Course Id"  
                    onChange={(e)=>setCourse({...course,id:e.target.value})}
                />

                <Button type="submit" variant='contained'>Submit</Button>
            </form>
           
        </div>
    )
}

export default UpdateSubject