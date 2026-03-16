const express = require("express");

const app = express();

//student router
const studentRoutes = require("./routes/students");
//course router
const courseRoutes = require("./routes/courses");

const PORT = 3000;

//Home Router
app.get("/", (req, res) =>{
    res.send("Welcome to the Student & Course Portal API!");  
});

//routers
app.use("/students", studentRoutes);
app.use("/courses", courseRoutes);

//404 handler
app.use((req,res) =>{
    res.status(404).send("Page not found");
});

//apna server-----
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
