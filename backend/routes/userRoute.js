const express = require("express");
const mongoose = require("mongoose");
const User = require('../models/userModel');

const router = express.Router();




// CRUD operation => Creat, Read , Update, Delete

// Creat operation 

router.post("/", async(req, res)=> {
    // var name = req.body.name; 
    // shotcut for above code i.e name

    const {name, email, age} = req.body;

    try {
        const userAdded = await User.create({
            name: name, //backend: frontend
            email: email,
            age: age,
        });

        res.status(201).json(userAdded);


    } catch (error) {
        console.log(error)
        res.send(400).json({
            error: error.message
        })

    }
})

// Now Read operation 
router.get("/", async (req,res) => {

    try {
        const showAll = await User.find();
        res.status(200).json(showAll);

    } catch (error) {
        console.log(error);
        res.send(500).json({
            error: error.message
        })
    }


    // res.send("api running ankit pandey");
})

// get single user
router.get("/:id", async(req, res) => {

    const { id } = req.params;

    try {
        const singleUser = await User.findById({
            _id: id
        });
        res.status(200).json(singleUser);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: error.message
        });
    }
})

// Delete Operation
router.delete("/:id", async(req, res) => {

    const {id} = req.params;

    try {
        const singleUser = await User.findByIdAndDelete({
            _id: id // databaseId: userId
        });
        res.status(200).json(singleUser);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: error.message
        });
    }
})


//Now last operation Update operation i.e => put
// PUT replaces an entire resource, while PATCH updates a resource partially:
router.patch("/:id", async(req,res) => {
    const { id } = req.params;
    const { name, email, age} = req.body;
    try {
        const updateUser = await User.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        res.status(200).json(updateUser);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: error.message
        })
    }
})

// here we are done with create and read and delete and last update operation

// here our backend will ready


module.exports = router;