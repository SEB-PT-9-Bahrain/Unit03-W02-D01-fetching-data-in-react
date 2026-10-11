import axios from 'axios'
import { useState, useEffect } from 'react'
function StudentList() {
    const [ students, setStudents ] = useState([])

    async function getAllStudents(){
        const response = await axios.get('https://omar-ga-class.onrender.com/students')
        setStudents(response.data)
        console.log(response.data)

    }

    // useEffect takes 2 arguments:
    // 1. a function
    // 2. dependancy Array
    useEffect(()=>{
        getAllStudents()
    },[])

    

  return (
    <div>
        <h1>Students List</h1>
        
        {students.map((oneStudent)=>
        <div key={oneStudent._id}>
            <p>Name:{oneStudent.name}</p>
        </div>
        )}
    </div>
  )
}

export default StudentList