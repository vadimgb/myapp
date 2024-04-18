import express from "express"
import bodyParser from "body-parser"

const app = express()
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true}))

const port = process.env.PORT || 8080
app.get("/", (req, res) => {res.render("index.ejs")})

app.post("/", (req, res) => {
    const username = req.body.username;
    res.render("hello.ejs", {username: username})
})
app.listen(port,
    () => {
        console.log(`App listen port: ${port}`)
    }
)
