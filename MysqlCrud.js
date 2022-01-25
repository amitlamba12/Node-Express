const mysql=require('mysql2')
const express=require('express')
const app=express()
const bodyparser=require('body-parser')

app.use(bodyparser.json())
const mysqlConnection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"amit",
    database:"amit"
});

mysqlConnection.connect((err)=>{
    if(!err)
        console.log("DB connection succeded.")
    else
    console.log("DB coonection failed  \n Error:",+JSON.stringify(err,undefined,2))
})

app.listen(3000,()=>console.log("Express Server is runing at port No: 3000"))

app.get('/employee',(req,res)=>{
    mysqlConnection.query('select * from emp4',(err,rows,field)=>{
        if(!err)
        console.log(rows)
        else
        console.log(err)
    })
})

app.get('/employee/:id',(req,res)=>{
    mysqlConnection.query('select * from emp4 where id=?',[req.params.id],(err,rows,field)=>{
        if(!err)
        console.log(rows)
        else
        console.log(err)
    })
})
