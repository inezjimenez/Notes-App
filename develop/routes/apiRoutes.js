//dependencies
// how app end points respond to client request
const router = require("express").Router();
const express = require('express');
const app = express();

//get requests
//create 1, delete 1, update 1

//get all notes
app.get('api/notes', (req,res) => {
    res.json(`${req.method} request notes received`);

    console.info(`${req.method} request method completed`)
    .then(() => {
       // return ingormaiton back to teh client
    })
    .catch ((error) => res.status(500).json(error));
}) 
//return text to json

//if nothing returns, log error


