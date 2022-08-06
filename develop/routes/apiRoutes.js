//dependencies
// how app end points respond to client request
const router = require("express").Router();
const {createNewNote, updateDb} = require("../../develop/lib/notes");
const { v4: uuidv4} = require('uuid');
const {notes} = require("../db/db.json")

//get requests
//create 1, delete 1, update 1
router.get("/notes", (req,res) => {
    let results = notes;
    res.json(results)
});
    router.post("/notes", (req, res) => {
        req.body.id = uuidv4();
        const newNote = createNewNote(req.body, notes);
        res.json(newNote);
    });

    router.delete("/notes/:id", (req,res) => {
        const params = req.params.id
        updateDb(params, notes);
        res.redirect('');
    });

module.exports = router; 


//get all notes
// app.get('api/notes', (req,res) => {
//     res.json(`${req.method} request notes received`);

//     console.info(`${req.method} request method completed`)
//     .then(() => {
//        // return ingormaiton back to teh client
//     })
//     .catch ((error) => res.status(500).json(error));
//return text to json

//if nothing returns, log error


