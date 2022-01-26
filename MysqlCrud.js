const mysql=require('mysql2')
const express=require('express')
const app=express()
const mysqlConnection=mysql.createConnection({
    host:"localhost",
    user:'root',
    password:'amit',
    database:'amoit'
})
app.use(express.json());
mysqlConnection.connect((err)=>{
    if(!err)    
        console.log("DB Connected Successfully");
    else
    console.log('DB DB coonection failed  \n Error:',+JSON.stringify(err,undefined,2))
        
})

app.listen(3000,()=>{
    console.log('Server is Runing  At Port No : 3000')
})

app.get('/employees',(req,res)=>{
    mysqlConnection.query('select * from lamba',(err,rows,field)=>{
        if(!err){
            res.send(rows)
            console.log(rows)
        }
        else{
            console.log(err)
        }
    })
})

app.get('/employees/:id',(req,res)=>{
    mysqlConnection.query('select * from lamba where id=?',[req.params.id],(err,rows,field)=>{
        if(!err){
            res.send(rows)
            console.log(rows)
        }
        else{
            console.log(err)
        }
    })
})

app.delete('/employee/:id',(req,res)=>{
    mysqlConnection.query('delete from lamba where id=?',[req.params.id],(err,rows,fields)=>{
        if(!err){
            res.send(rows)
        }
        else{
            console.log(err)
        }
    })
})

app.put('/employees/:id',(req,res)=>{
   let sql = "update lamba SET name = ?, lastname = ?, salary = ? where id = ?";
   mysqlConnection.query(sql, [req.body.name, req.body.lastname, req.body.salary, req.params.id], (err, result) => {
    if (!err) {
        res.json({messagea: 'updated successfull'}).end();
    } else {
        res.json({message: 'Error occured'}).end();
    }
   });
})

app.post('/employees/:id',(req,res)=>{
    let sql = "insert into lamba(name,lastname, salary, id) values(?,?,?,?)";
    mysqlConnection.query(sql, [req.body.name, req.body.lastname, req.body.salary, req.params.id], (err, result) => {
     if (!err) {
         res.json({messagea: 'Inserted successfull'}).end();
     } else {
         res.json({message: 'Error occured'}).end();
     }
    });
 })


