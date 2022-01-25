const express=require('express')
const EmployeeContoller=require('./employee-controller')
const app=express()

app.use(express.json())
app.use('/employees',EmployeeContoller);

app.listen(8080,()=>{
    console.log("Server is Started")
})