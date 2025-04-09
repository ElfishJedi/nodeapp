const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname + '/static')));

app.use((req, res) => {
    res.status(404);
    res.send('<h1 style="text-align: center;font-family: sans-serif;justify-self: center;padding: 20vh;border: red solid;text-decoration: underline;color: black;">Error 404: Resource not found</h1>')
})

app.listen(9534, () =>{
    console.log("App listening on port 9534");
})
