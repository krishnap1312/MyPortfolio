const express = require('express')
const MongoDB = require('mongodb').MongoClient
const cors = require('cors')

const URL = "mongodb://127.0.0.1:27017"
const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())

app.use(express.urlencoded({
    extended:true
}));
app.use(express.json())


app.get("/Messages",(req,res)=>{
    MongoDB.connect(URL).then((object)=>{
        var database = object.db("Messages")
        database.collection("Msg").find({}).toArray().then((document)=>{
            res.send(document)
        })
    })
})

app.post("/postMsg",(req,res)=>{

    var data = {
        Name : req.body.Name,
        Email : req.body.Email,
        Query : req.body.Query,
    }

    MongoDB.connect(URL).then((object)=>{
        var database = object.db("Messages")
        database.collection("Msg").insertOne(data).then(()=>{
            res.redirect("/Messages")
        })
    })
})


app.listen(PORT,()=>{
    console.log("connected"+PORT)
})