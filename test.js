let express = require("express")
let ourApp = express()
ourApp.use(express.urlencoded({ extended: false }))


ourApp.get('/', function (req, res) {
    res.send(`
<form action="/answer" method="POST">
<p>What is the color of sky in clear and sunny day? </p>
<input name="skyColor" autocomplete="off">
<button> Submit Answer </button>
</form>
`)
})

ourApp.post("/answer", function (req, res) {
    if (req.body.skyColor.toUpperCase() == "BLUE") {
        res.send(`
<p> congrats! your answer is correct. </p>
<a href="/"> Go back to home page </a>
`)
    }
    else {
        res.send(`
        <p> Sorry, that is incorrect. </p>
        <a href="/"> Go back to home page </a>
        `)
    }
})
ourApp.get("/answer", function (req, res) {
    res.send("Are you lost? There is nothing here.")
})
ourApp.listen(3000)