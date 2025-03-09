import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUser] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:3001/')
    .then(result => setUser(result.data))
    .catch(err=> console.log(err))
  }, [])


  return (
    <>
      <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className='50 bg-white rounded p-3 text-start'>
      <h1>Crud Operations</h1>

        <Link to="/create" className='btn btn-success'>
          Add a new user
        </Link>

        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.age}</td>
                  <td colSpan={2}>
                  <Link to={`/update/${user._id}`} className='btn btn-success'>Edit
                  </Link>
                  <button onClick= {(e)=>{
                    e.preventDefault();
                    axios.delete(`http://localhost:3001/deleteUser/${user._id}`)
                    .then(result => {console.log(result)
                       window.location.reload()})
                    .catch(err => console.log(err))
                  }} className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};

export default Users;
