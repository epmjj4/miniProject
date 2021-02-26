const http = require('http')
const fs = require('fs')
const express = require('express');

const PORT = 3000;
const server = http.createServer(handleRequest);

function handleRequest(req, res) {

    // Here we use the fs package to read our index.html file
    fs.readFile(__dirname + "/index.html", function (err, data) {
        if (err) throw err;
        // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
        // an html file.
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}

let reservations = [{
    routeName: "",
    name: "",
    time: "19:00",
    email: 900,
    phone: 2000,
}]

let table = [{
    routeName: "",
    name: "",
    time: "19:00",
    email: 900,
    phone: 2000,
}]

app.get("/index", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/table", function (req, res) {
    res.sendFile(path.join(__dirname, "table.html"));
});

app.get("/reservation", function (req, res) {
    res.sendFile(path.join(__dirname, "table.html"));
});



// const showHomepage = (req, res) => {
//     fs.readFile("./index.html", "utf8", (err, data) => {
//         if (err){
//             res.writeHead(500, {"Content-Type": "text/html"});
//             res.end(data);
//         }

//     })

// }



server.listen(PORT, function () {
    console.log("Server is listening on PORT: " + PORT);
})