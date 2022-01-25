const express=require('express')
const EmployeeContoller=express.Router()
const data=[
    {id:1,name:'Amit Kumar',age:21},
    {id:2,name:'Amit Sharma',age:22},
    {id:3,name:'Shivam Sharma',age:22},
    {id:4,name:'Rahul Patel',age:22},
    {id:5,name:'Neeraj Yadav',age:22},
    {id:6,name:'Shivam Rawat',age:22}
]

EmployeeContoller.get('/',(req,res)=>{
    res.json(data)
})

EmployeeContoller.get('/:id',(req,res)=>{
   let employeeId=req.params.id;
   res.json(data[employeeId])
})

EmployeeContoller.post('/',(req,res)=>{
    console.log(req.body)
    data.push(req.body)
})

EmployeeContoller.put('/:id',(req,res)=>{
    let employeeId=req.params.id;
    let employee=req.body
    data[employeeId].name=req.body.name
    data[employeeId].age=req.body.age
    res.end()
})

EmployeeContoller.delete('/:id',(req,res)=>{
    let employeeId=req.params.id;
    data.splice(employeeId,1)
    res.end()
})

module.exports  =  EmployeeContoller;