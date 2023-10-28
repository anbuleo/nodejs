
console.log("welcome world of backend")

const os = require('os')
// console.log(os.cpus())
console.log(os.uptime())

to read a file by using readFile

const { error } = require('console')
const fs = require('fs')

fs.readFile('./sample.txt','utf-8',(error, data)=>{
    if(error){
        console.log(error)
    }
    else{
        console.log(data)
    }
})

Using  readFileSync method // comparing to both this exceute fast because O(n)


let data = fs.readFileSync('./sample.txt','utf-8')
console.log('sync',data)

To write a new file =>  fs.writeFile('path','data','formate(utf-8)',(error)=>{ if (error) console.log(error) else console.log('File created success')})

fs.writeFile('./sampleForWriteFile.txt','Hai we created a new file','utf-8',(error)=>{
    if(error)
    console.log(error)
    else
    console.log('File created Successfully')
})

To write and read a sync method

To write

fs.writeFileSync('./sampleSync.txt','This is a sync method','utf-8')

let syncdata = fs.readFileSync('./sampleSync.txt','utf-8')

To create a server 

const http = require('http')

const server  = http.createServer((req,res)=>{
    res.writeHead(200,{
        "content-type":"text/html"
    })
    res.end(`<h1>Hello Server Is runing</h1>`)
})

server.listen(8000,()=>"server is running in 8000")

TO create a json

const http = require('http')

const server = http.createServer((req,res)=>{
    res.writeHead(200,{
        "content-type":"application/json"
    })
    res.end(JSON.stringify({
        name:"anbu",
        email:"anbu@gmail.com"
    }))

})

server.listen(8000,()=>console.log("server is lisning port 8000"))

To write a file and read to listen the port 


const fs = require('fs')
const http = require('http')
let time = new Date().toLocaleString()



const server = http.createServer((req,res)=>{

    try {
        fs.writeFileSync('./date.txt',`${time}`,'utf-8')
       let data =  fs.readFileSync('./date.txt','utf-8')
       res.writeHead(200,{
        "content-type":"text/html"
       
    })
    res.end(`${data}`)
    } catch (error) {
        console.log(error)
    }   

})

server.listen(8000,()=>console.log("server is lisning port 8000"))