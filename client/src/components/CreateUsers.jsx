import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateUsers = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    // This code is a React (or frontend JavaScript) snippet that uses the axios library to send a POST request
    // to a backend server. It sends user data (name, email, and age) to the server and logs the response or
    // error.
    axios
      .post("http://localhost:3001/createUser", { name, email, age })
      .then((result) => console.log(result), navigate("/"))
      .catch((err) => console.log(err));

    // .then(...): This is a Promise handler that executes when the POST request is successful.
    // result: This is the response returned by the server. It typically contains:
    // data: The actual data returned by the server (e.g., the newly created user object).
    // status: The HTTP status code (e.g., 200 for success).
    // headers: The response headers.
    // console.log(result): This logs the entire response object to the console for debugging or inspection.
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3 text-start">
        <form onSubmit={Submit}>
          <h2>Add User</h2>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="age" className="form-label">
              Age
            </label>
            <input
              type="number"
              className="form-control"
              id="age"
              placeholder="Enter Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateUsers;
