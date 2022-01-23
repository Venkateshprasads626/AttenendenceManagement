import { TextField, Button,TextareaAutosize} from '@mui/material'
import React, { useState } from 'react'


const AddCourse = () =>{

    const[name, setName]=useState('')
    const[description, setDescription]=useState('')



    const handleSubmit=(e)=>{
        e.preventDefault()
        const course={name,description}
        console.log(course)

        fetch("http://localhost:8080/api/addCourse",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(course)
        }).then(()=>{
            alert(`New Course added!!`)
        })
    }


    return(
       
        <div>
            <form className="add-course-form">
                <TextField type="text" margin="normal" 
                    fullWidth name="name" label="Course Name"  
                    placeholder='Enter Course Name'
                    id="name"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                />
                <TextareaAutosize type="text" margin="normal" 
                    style={{ width: '92%',padding:'20px' }}
                    label="Description"  
                    placeholder='Desciption'
                    id="description" 
                    value={description}
                    onChange={(e)=>setDescription(e.target.value)}
                />
                <Button type="submit" variant='contained' onClick={handleSubmit}>Submit</Button>
            </form>
           
        </div>
    )
}

export default AddCourse