const express = require("express")
const app = express()


app.set("view engine", "ejs")
app.use(express.static("public"))

app.get("/", (req, res)=>{
    var nome="raquel"
    res.render("aula",{
        nome: nome

    })
})



app.listen(8081,()=>(
    console.log("servidor")

))



// app.get("/perfil",(req,res)=>{
//     res.send(" Bem-vindo ao senac!")

// })

// app.get("/blog",(req,res)=>{
//     res.send("site blog senac")

// })



