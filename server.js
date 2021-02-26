const express = require('express');
let path = require ('path')
let app = express();

const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


let reservations = [{
    name: "Paul ",
    PhoneNumber: "555 044 3421 ",
    email: "adee@gmail.com ",
    uniqueId: "123212",
}]

let waitlist = []

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
    reservations.push(data)
    console.log(reservations)

    if(reservations.length > 5) {
        waitlist.push(data)
        console.log("waitlist")
        console.log(waitlist)
        res.json(waitlist)

    }
    else {
        reservations.push(data)
        console.log("reservations")
        console.log(reservations)
        res.json(reservations)
        
    }
   
});

app.listen(PORT, function () {
    console.log("Server is listening on PORT: " + PORT);
})