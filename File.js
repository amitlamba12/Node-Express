const fs=require('fs')
const data='Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi fuga, nam praesentium, quas maiores aperiam rerum ullam tempore atque, numquam perspiciatis architecto doloribus aliquid? Id sunt totam voluptatem a impedit velit eius fugit deserunt delectus voluptates numquam explicabo ad natus, voluptate aspernatur voluptatibus accusantium officiis minima dolorum vero quo nisi eum? Dolorem necessitatibus commodi sapiente iste, assumenda officiis doloremque repellendus, nisi nihil autem repudiandae, tempore optio ut dolor? Corporis atque ab placeat aut reiciendis, adipisci maiores facilis, nobis itaque veritatis velit architecto nam modi quis tempore ipsa earum. Id eum asperiores, ut nostrum magni quo repudiandae reprehenderit. Magni, dolorum quae?'
// Create File 
fs.writeFile('read.txt',data,function(err){
    if (err) throw err;
    console.log('Created Successfully')
})

//Read File 
// fs.readFile('read.txt','utf-8',(err,value)=>{
//     if (err) throw err;
//     console.log(value)
// })

//Append File
//const amit=' My Name is Amit Kumar, And I m Learning Node JS Technology'
// fs.appendFile('read.txt',amit,(err)=>{
//     if (err) throw err;
//     console.log('Data Add Sucessfully')
// })

//Unlink File
// fs.unlink('read.txt',function(err){
//     if (err) throw err;
//     console.log('Delted Sucessfully')
// })

