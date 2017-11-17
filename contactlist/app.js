const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

let app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
let dataList = [];
let id = 0;

app.get("/api/data", function (req, res) {
    res.status(200).json(dataList);
});

app.post("/api/data", function (req, res) {
    console.log("Body: ", req.body);
    let contact = {
        "id": id,
        "firstName": req.body.firstName,
        "lastName": req.body.lastName,
        "email": req.body.email,
        "phone": req.body.phone,
        "favMeal": req.body.favMeal,
        "petName": req.body.petName,
        "momsMaidenName": req.body.momsMaidenName
    }
    id++;
    dataList.push(contact);
    res.status(200).json(contact);
});

app.delete("/api/data/:id", function (req, res) {
    for (i = 0; i < dataList.length; i++) {
        if (dataList[i].id == req.params.id) {
            dataList.splice(i, 1);
            return res.status(200).json({ "message": "success" });
        }
    }
    res.status(404).json({ "message": "not found" });
});

console.log("Running at port 3000..");
app.listen(3000);