

// fs.writeFile('./sampleForWriteFile.txt','Hai we created a new file','utf-8',(error)=>{
//     if(error)
//     console.log(error)
//     else
//     console.log('File created Successfully')
// })

// fs.writeFileSync('./sampleSync.txt','Next line is working?','utf-8')

// let syncdata = fs.readFileSync('./sampleSync.txt','utf-8')

//     console.log(syncdata)
// fs.readFile('./sample.txt','utf-8',(error, data)=>{
//     if(error){
//         console.log(error)
//     }
//     else{
//         console.log(data)
//     }
// })

// let data = fs.readFileSync('./sample.txt','utf-8')
// console.log('sync',data)


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