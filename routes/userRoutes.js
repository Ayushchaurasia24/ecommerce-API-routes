const express = require('express');

const router = express.Router();

router.get("/" , (req,res)=>{
    res.send("Fetch all users");
});

router.post("/", (req,res)=>{
    res.send("ADDING new user");
});

router.get("/:id", (req,res)=>{
    res.send(`Fetching user with id: ${req.params.id}`);
});

module.exports = router;