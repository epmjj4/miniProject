const express = require('express');
let path = require ('path')
let app = express();

const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


let reservations = [{
    name: "",
    PhoneNumber: "",
    email: " ",
    uniqueId: " ",
}]

let table = [{
    1: " ",
    2: " ",
    3: " ",
    4: " ",
}]

app.get("/index", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/table", function (req, res) {
    res.sendFile(path.join(__dirname, "table.html"));
});

app.get("/reservation", function (req, res) {
    res.sendFile(path.join(__dirname, "reservation.html"));
});

app.post("/api/reservation", (req, res) => {
    var data = req.body;
    console.log(data);
    reservations.push()
   
});

app.listen(PORT, function () {
    console.log("Server is listening on PORT: " + PORT);
})