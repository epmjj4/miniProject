const express = require('express');
let path = require ('path')
let app = express();

const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


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
    res.sendFile(path.join(__dirname, "reservation.html"));
});

app.post("/api/reservation", (req, res) => {
    var data = req.body;
    console.log(data);
   
});

app.listen(PORT, function () {
    console.log("Server is listening on PORT: " + PORT);
})