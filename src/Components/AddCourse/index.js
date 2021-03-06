import { TextField, Button,TextareaAutosize} from '@mui/material'
import React, { useState } from 'react'


const AddCourse = () =>{

    const[name, setName]=useState('')
    const[description, setDescription]=useState('')


    const[nameErr, setNameErr] = useState({});
    const[descriptionErr, setDescriptionErr] = useState({});


    const handleSubmit=(e)=>{
        e.preventDefault()
        
        const isValid = formValidation();
        //checking validation
        if(isValid) {
            const course={name,description}
            console.log(course)

           //Fetching data using api
            fetch("http://localhost:8080/api/addCourse",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(course)
            }).then(()=>{
                alert(`New Course added!!`)
            })
            
            setName("");
            setDescription("");
        }
       
    }

    const formValidation = () =>{
        const nameErr = {};
        const descriptionErr = {};
        let isValid = true;

        if(name.trim().length <=0 ){
            nameErr. nameShort = "Please Fill this field";
            isValid = false;
        }

        if(description.trim().length > 10){
            descriptionErr.descriptionShort =  "Description too long"
            isValid = false;
        }


        setNameErr(nameErr);
        setDescriptionErr(descriptionErr);
        return isValid;
    }


    return(
       
        <div>
            <form className="add-course-form" onSubmit={handleSubmit}>
                <TextField type="text" margin="normal" 
                    fullWidth name="name" label="Course Name"  
                    placeholder='Enter Course Name'
                    id="name"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                />
                {Object.keys(nameErr).map((key)=>{
                    return <div style={{color:'red',width:'500px'}}>{nameErr[key]}</div>
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
                <Button type="submit" variant='contained'>Submit</Button>
            </form>
           
        </div>
    )
}

export default AddCourse