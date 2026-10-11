import axios from 'axios'
import { useState } from 'react'
function CreateStudent() {
    const [ formData, setFormData ] = useState({
        name:'',
        course:'',
        city:''
    })

    function handleChange(event){
        setFormData({...formData,[event.target.name]:event.target.value})
    }

    async function handleSubmit(event){
        event.preventDefault()

        const response = await axios.post('https://omar-ga-class.onrender.com/students',formData)
    }
  return (
    <div>
        <h1>Create Student</h1>

        <form onSubmit={handleSubmit}>

            <label htmlFor="name">Name:</label>
            <input 
            type="text" 
            value={formData.name}
            onChange={handleChange}
            name='name'
            id='name'
            />
            
            <label htmlFor="course">Course:</label>
            <input 
            type="text"
            value={formData.course}
            onChange={handleChange}
            name='course'
            id='course'
             />

            <label htmlFor="city">City:</label>
            <input 
            type="text" 
            name='city'
            id='city'
            value={formData.city}
            onChange={handleChange}
            />

            <button>Create Student</button>
        </form>
    </div>
  )
}

export default CreateStudent