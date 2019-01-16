const express = require("express")
const app = express()
const port = process.env.PORT

app.use(express.json())

app.use((request, response, next) => {
    console.log("Request received", request.body)
    next()
})

app.post('/', (request, response) => {
    if (!request.body.hasOwnProperty("foo"))
        throw new Error("`foo` expected in body")

    if (request.body.foo == "bar") {
        console.log("`foo-bar` matched. We likes it!")
        response.status(200).send(request.body)
    }
    else {
        console.log("Expected value for `foo` is `bar`. Received : ", request.body.foo)
        throw new Error("`foo` was sent with wrong value. We dislikes it!")
    }
})

app.use((err, request, response, next) => {
    console.log(err)
    response.status(500).send({ error: err.toString()})
})

app.listen(port)
