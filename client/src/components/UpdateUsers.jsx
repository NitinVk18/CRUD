import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const UpdateUsers = () => {

  const {id} = useParams(); 

   const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
  const navigate = useNavigate();

  useEffect(()=>{
    axios.get(`http://localhost:3001/getUser/${id}`)
    .then(result => {console.log(result)
      setName(result.data.name)
      setEmail(result.data.email)
      setAge(result.data.age)
    })
    .catch(err=> console.log(err))
  }, [])

  const Update = (e)=>{
    e.preventDefault();
    axios.put(`http://localhost:3001/updateUser/${id}`, { name, email, age })
    .then(result => { 
      console.log(result)
    navigate('/')
  })
  .catch(err => console.log(err))
  }

  function usersPage(){
    navigate('/')
   }
  return (
    <div>
      <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3 text-start">
        <form onSubmit={Update}>
          <h2>Update User</h2>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" value={name}
            onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" value={email} 
            onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className="mb-3">
            <label htmlFor="age" className="form-label">Age</label>
            <input type="number" className="form-control" id="age" value={age} 
            onChange={(e) => setAge(e.target.value)} />
          </div>
          <button type="submit" className="btn btn-success">Update</button>
          <button onClick={usersPage} className="btn btn-secondry" > Back To Users</button>

        </form>
      </div>
    </div>
    </div>
  )
}

export default UpdateUsers