const express = require('express');

const router = express.Router();

router.get("/", (req,res)=>{
    res.send("Fetching all prod");
});

router.post("/", (req,res)=>{
    res.send("adding new product");
});

router.get("/:id", (req,res)=>{
    res.send(`Fetching by id: ${req.params.id}`);
});

module.exports = router;