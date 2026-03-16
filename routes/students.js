const express = require("express");
const router = express.Router();

const students = [
{ id: 1, name: "Alice" },
{ id: 2, name: "Bob" },
{ id: 3, name: "Charlie" }
];

//get all stud
router.get("/" ,(req,res)=>{

    //student ka sirf name nikalenge
    const studentNames = students.map(student => student.name);

    //response ko string me bhejenge
    res.send(`Students: ${studentNames.join(", ")}`);
});


//get stud by ID...
router.get("/:id", (req,res)=>{

    //converting id(string) -> id(number)
    const id = parseInt(req.params.id);

    //find stud w matching ID
    const student = students.find(s => s.id === id);

    if(student){
        //stud exists
        res.send(`Student: ${student.name}`);
    }
    else{
        res.send("Student Not Found");
    }
});

module.exports =router;

