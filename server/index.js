const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/usersModel");

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Fixed: Added parentheses

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/MernCrud")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB:", err));

  app.get('/', (req, res) => {
    UserModel.find({})
      .then((users) => res.json(users))  
      .catch((err) => res.json(err));
  });
// Route to create a new user
app.post("/createUser", (req, res) => {
  UserModel.create(req.body)
    .then((users) => res.json(users)) // Send the created user as a response
    .catch((err) => res.status(400).json(err)); // Send error with status code 400
});

app.get('/getUser/:id', (req, res)=>{
    const id = req.params.id;
    UserModel.findById({_id: id})
    .then(user => res.json(user))
    .catch(err => res.json(err))
})
app.put('/updateUser/:id', (req, res)=>{
    const id = req.params.id;
    UserModel.findByIdAndUpdate(id, {name: req.body.name, email: req.body.email, age: req.body.age})
    .then(user => res.json(user))
    .catch(err => res.json(err))
})
app.delete('/deleteUser/:id', (req, res)=>{
    const id = req.params.id;
    UserModel.findByIdAndDelete({_id: id})
    .then(user => res.json(user))
    .catch(err => res.json(err))
})

// Start the server
app.listen(3001, () => {
  console.log("Server is running on http://localhost:3001");
});
